import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * class Visitor extends NestedVisitor {
  *   ...
  * }
  */
export default class NestedVisitor extends ASTVisitor {

  /** Visit path
    * @abstract
    * @param {Object} path
    * @param {Object} state
    */
  enter(path, state) {
    switch(true) {
      case !path:
        throw(new TypeError('Missing `path`'))
        break

      case !path.traverse:
        throw(new TypeError('Invalid `path`'))
        break

      case !path.parent:
        throw(new TypeError('Invalid `path.parent`'))
        break

      case !state:
        throw(new TypeError('Missing `state`'))
        break

      case !state.mocktail || typeof(state.mocktail !== 'object'):
        throw(new TypeError('Invalid `state.mocktail`'))
        break

      case !state.mocktail.name || typeof(state.mocktail.name) !== 'string':
        throw(new TypeError('Invalid `state.mocktail.name`'))
        break

      case !state.mocktail.path || typeof(state.mocktail.path) !== 'string':
        throw(new TypeError('Invalid `state.mocktail.path`'))
        break

      case !state.mocktail.module || typeof(state.mocktail.module) !== 'string':
        throw(new TypeError('Invalid `state.mocktail.module`'))
        break
    }
  }
}
