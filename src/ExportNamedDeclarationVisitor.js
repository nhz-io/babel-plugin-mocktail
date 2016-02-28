import { types as t } from "babel-core"
import { buildExportNamedDeclaration, buildMockExportVar } from "./helpers"

export default class ExportNamedDeclarationVisitor {
  constructor(defaultState = {}) {
    return function(path, state = defaultState) {
      const { enqueue, scope, moduleName, mock } = state
      const { declaration, specifiers } = path.node
      if(declaration) {
        switch(true) {
          /** Declaration */
          case t.isDeclaration(declaration): {
            const declarations = [].concat(declaration || [], declaration.declarations || [])
            declarations.forEach((declaration) => {
              switch(true) {
                case t.isVariableDeclaration(declaration): {
                  enqueue(path, declaration)
                  break
                }
                case t.isVariableDeclarator(declaration): {
                  let name = declaration.id.name
                  let _name = scope.generateUidIdentifier(name)
                  enqueue(path, buildMockExportVar(mock, name, _name))
                  enqueue(path, buildExportNamedDeclaration(_name, name))
                  break
                }
                default: {
                  let name = declaration.name || (declaration.id && declaration.id.name) || moduleName
                  let _name = scope.generateUidIdentifier(name).name
                  enqueue(path, declaration)
                  enqueue(path, buildMockExportVar(mock, name, _name))
                  enqueue(path, buildExportNamedDeclaration(_name, name))
                }
              }
            })
            break
          }          
        }
      }
      else if(specifiers) {
        /** Specifiers */
        specifiers.forEach((specifier) => {
          const { local: { name: local }, exported: { name: exported } } = specifier
          const _name = scope.generateUidIdentifier(local).name
          enqueue(path, buildMockExportVar(mock, exported, _name, local))
          enqueue(path, buildExportNamedDeclaration(_name, exported))
        })
      }
    }
  }
}
