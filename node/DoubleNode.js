const Node = require("./Node")
class DoubleNode extends Node{
  constructor(ele){
    super(ele);
    this.prev = null;
  }
}
module.exports = DoubleNode