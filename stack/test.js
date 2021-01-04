const {Stack,ArrayStack, ObjectStack} = require("./index.js");
const stack = new ObjectStack();
console.log('isEmpty',stack.isEmpty()); 
console.log('push',stack.push(5)); 
console.log('push',stack.push(8)); 
console.log('push',stack.push(3)); 
console.log('push',stack.push(2)); 
console.log('peek',stack.peek()); 
console.log('size',stack.size()); 
console.log('string',stack.toString()); 
console.log('isEmpty',stack.isEmpty()); 
console.log('pop',stack.pop()); 
console.log('pop',stack.pop()); 
console.log('peek',stack.peek());
console.log('clear',stack.clear());
console.log('peek',stack.peek());
console.log('size',stack.size());
console.log('isEmpty',stack.isEmpty()); 

