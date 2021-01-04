const { Queue, ArrayQueue } = require("./index.js");

// const queue = new Queue([1, 2]);
// console.log("enqueue", queue.enqueue(3));
// console.log("enqueue", queue.enqueue(5));
// console.log("enqueue", queue.enqueue(6));
// console.log("enqueue", queue.enqueue(8));
// console.log("enqueue", queue.enqueue(2));

// console.log("size", queue.size());
// console.log("isEmpty", queue.isEmpty());
// console.log("peek", queue.peek());
// console.log("toString", queue.toString());
// console.log("dequeue", queue.dequeue());
// console.log("dequeue", queue.dequeue());
// console.log("peek", queue.peek());
// console.log("size", queue.size());
// console.log("toString", queue.toString());
// console.log("dequeue", queue.dequeue());
// console.log("dequeue", queue.dequeue());
// console.log("dequeue", queue.dequeue());
// console.log("peek", queue.peek());
// console.log("size", queue.size());
// console.log("isEmpty", queue.isEmpty());
// console.log("toString", queue.toString());
// console.log("enqueue", queue.enqueue(12));
// console.log("peek", queue.peek());
// console.log("size", queue.size());
// console.log("isEmpty", queue.isEmpty());
// console.log("toString", queue.toString());

// console.log("clear", queue.clear());
// console.log("peek", queue.peek());
// console.log("size", queue.size());
// console.log("isEmpty", queue.isEmpty());
// console.log("toString", queue.toString());


const {Deque,ArrayDeque} = require("./deque.js");

const deque = new Deque();
console.log("addBack",deque.addBack(1))
console.log("addBack",deque.addBack(2))
console.log("addFront",deque.addFront(3))
console.log("addFront",deque.addFront(4))
console.log("peekFront",deque.peekFront());
console.log("peekBack",deque.peekBack());
console.log("isEmpty",deque.isEmpty());
console.log("size",deque.size());
console.log("toString",deque.toString());
console.log("removeBack",deque.removeBack())
console.log("removeFront",deque.removeFront())
console.log("peekFront",deque.peekFront());
console.log("peekBack",deque.peekBack());
console.log("isEmpty",deque.isEmpty());
console.log("size",deque.size());
console.log("toString",deque.toString());
console.log("addBack",deque.addBack(2))
console.log("addFront",deque.addFront(3))
console.log("addFront",deque.addFront(4))
console.log("peekFront",deque.peekFront());
console.log("peekBack",deque.peekBack());
console.log("isEmpty",deque.isEmpty());
console.log("size",deque.size());
console.log("toString",deque.toString());
console.log("removeBack",deque.removeBack())
console.log("removeFront",deque.removeFront())
console.log("removeBack",deque.removeBack())
console.log("peekFront",deque.peekFront());
console.log("peekBack",deque.peekBack());
console.log("removeFront",deque.removeFront())
console.log("removeBack",deque.removeBack())
console.log("removeFront",deque.removeFront())
console.log("peekFront",deque.peekFront());
console.log("peekBack",deque.peekBack());
console.log("isEmpty",deque.isEmpty());
console.log("size",deque.size());
console.log("toString",deque.toString());