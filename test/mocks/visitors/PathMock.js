import sinon from "sinon"
export default class PathMock {
  constructor({parent}) {
    return {
      traverse: sinon.spy(),
      parent: { type: parent },
    }
  }
}
