import NestedVisitor from './NestedVisitor'

/**
  * @example
  * const visitor = new IdentifierVisitor()
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#identifier
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tidentifiername
  * @see https://github.com/babel/babel/blob/5b89849f432cfc034860f495b5001039123e7754/packages/babel-types/src/definitions/core.js#L304
  */
export default class IdentifierVisitor extends NestedVisitor {

  /** Visit Identifier node
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
