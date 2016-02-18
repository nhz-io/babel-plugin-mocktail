import ASTVisitor from './ASTVisitor'
/**
  * @example
  * const Program = new ProgramVisitor({ ... })
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#programs
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tfileprogram-comments-tokens
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js#L449
  */

export default class ProgramVisitor extends ASTVisitor {
  /** Visit Program node
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

      case !state:
        throw(new TypeError('Missing `state`'))
        break

      case !path.parent:
        throw(new Error('Missing `path.parent`'))
        break

      case path.parent.type !== 'File':
        throw(new Error('Invalid `path.parent`'))
        break
    }

    const { filename } = path.parent.hub.opts

    state.mocktail = {
      imports: [],
      exports: [],
      path: filename,
      name: filename.replace(/^.+\//, '').replace(/\.[^/]+$/, ''),
      module: filename.replace(/^.+\//, '').replace(/\.[^/]+$/, ''),
    }

    if(Object.keys(this.nestedVisitors).length) {
      path.traverse(this.nestedVisitors, state)
    }
  }
}
