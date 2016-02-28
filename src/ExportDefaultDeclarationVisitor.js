import { types as t } from "babel-core"
import { buildMockExportDefaultDeclaration, buildConst, buildMockExportVar } from "./helpers"

export default class ExportDefaultDeclarationVisitor {
  constructor(defaultState = {}) {
    return function(path, state = defaultState) {
      const { enqueue, scope, moduleName, mock } = state
      let { declaration } = path.node
      if(declaration) {
        switch(true) {

          /** Declaration */
          case t.isDeclaration(declaration) || t.isExpression(declaration): {
            let name = declaration.name || moduleName
            if (declaration.id && declaration.id.name) {
              name = declaration.id.name
            }
            else if (t.isFunctionDeclaration(declaration) || t.isClassDeclaration(declaration)) {
              declaration.id = scope.generateUidIdentifier(name)
            }
            else {
              enqueue(path, buildMockExportDefaultDeclaration(mock, name, declaration))
              break
            }
            enqueue(path, declaration)
            enqueue(path, buildMockExportDefaultDeclaration(mock, name, declaration.id))
            break
          }

          /** All the rest will throw */
          default: {
            throw new TypeError(`Invalid declaration type: ${declaration.type}`)
          }
        }
      }
    }
  }
}
