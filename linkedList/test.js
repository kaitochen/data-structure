const {LinkedList,DoubleLinkedList,CircularLinkedList,CircularDoubleLinkedList}  = require("./index");
const linkedList = new CircularDoubleLinkedList();

console.log("push", linkedList.push("1"))
console.log("push", linkedList.push("2"))
console.log("push", linkedList.push("3"))
console.log("push", linkedList.push("4"))
console.log("push", linkedList.push("5"))
console.log("toString", linkedList.toString());
console.log("insert 4 in 0", linkedList.insert("4",0))
console.log("toString", linkedList.toString());
console.log("insert 9 in 3", linkedList.insert("9",3))
console.log("toString", linkedList.toString());
console.log("size", linkedList.size());
console.log("isEmpty", linkedList.isEmpty());
console.log("toString", linkedList.toString());
console.log("indexOf 9", linkedList.indexOf("9"));
console.log("indexOf 4", linkedList.indexOf("4"));
console.log("indexOf 8", linkedList.indexOf("8"));
console.log("toString", linkedList.toString());
console.log("getElementAt 4", linkedList.getElementAt(4));
console.log("removeAt 7", linkedList.removeAt(7));
console.log("toString", linkedList.toString());
console.log("removeAt 6", linkedList.removeAt(6));
console.log("toString", linkedList.toString());
console.log("removeAt 0", linkedList.removeAt(0));
console.log("toString", linkedList.toString());
console.log("remove 1", linkedList.remove("1"));
console.log("toString", linkedList.toString());
console.log("remove 8", linkedList.remove("8"));
console.log("toString", linkedList.toString());



