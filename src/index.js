import { getModuleName, buildMocktailImport, buildMockExportVar } from "./helpers"
import ExportDefaultDeclarationVisitor from "./ExportDefaultDeclarationVisitor"
import ExportNamedDeclarationVisitor from "./ExportNamedDeclarationVisitor"

module.exports = function( { types: t }) {
  const visitor = {
    Program: function(path, {file:{opts:{ filename }} }) {
      const { scope } = path
      const moduleName = getModuleName(filename)
      const mock = scope.generateUidIdentifier("mock")

      const queue = new Map()
      function enqueue(path, replacement) {
        const list = queue.get(path) || []
        list.push(replacement)
        queue.set(path, list.slice())
        return list
      }

      path.traverse({
        /** ExportDefaultDeclaration Visitor */
        ExportDefaultDeclaration: new ExportDefaultDeclarationVisitor({enqueue, mock, moduleName, scope}),

        /** ExportNamedDeclaration Visitor */
        ExportNamedDeclaration: new ExportNamedDeclarationVisitor({enqueue, mock, moduleName, scope}),
      })

      if(queue.size) {
        path.get('body')[0].insertBefore(buildMocktailImport(mock))
        queue.forEach((nodes, path) => path.replaceWithMultiple(nodes))
      }
    },
  }

  return { visitor }
}
