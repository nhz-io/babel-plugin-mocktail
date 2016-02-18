import NestedVisitor from './NestedVisitor'

/**
  * @example
  * const visitor = new ExportDefaultDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#exportdefaultdeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#texportdefaultdeclarationdeclaration
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/es2015.js#L123
  */
export default class ExportDefaultDeclarationVisitor extends NestedVisitor {

  /** Visit ExportDefaultDeclaration node
    * @param {Object} path
    * @param {Object} state
    */
  enter(path, state) {
    super.enter(path, state)

    switch(true) {
      case path.parent.type !== 'Program':
        throw(new Error('Invalid `path.parent`'))
        break
    }

    if(Object.keys(this.nestedVisitors).length) {
      path.traverse(this.nestedVisitors, state)
    }
  }

}
