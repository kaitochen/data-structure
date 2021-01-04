class Queue {
  constructor(initData = []) {
    this._queue = {};
    this.count = 0;
    this.first = 0;
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this._queue[this.count++] = item;
      });
    } else {
      this._queue[this.count++] = data;
      // this.count++;
    }
  }
  enqueue(data) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this._queue[this.count++] = item;
      });
    } else {
      this._queue[this.count++] = data;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this._queue[this.first];
    delete this._queue[this.first];
    this.first++;
    return res;
  }
  isEmpty() {
    return this.count <= this.first;
  }
  size() {
    return this.count - this.first;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._queue[this.first];
  }
  clear() {
    this._queue = {};
    this.count = 0;
    this.first = 0;
  }
  toString(){
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    Object.values(this._queue).forEach((val) => {
      const _str =
        val == null
          ? ""
          : Array.isArray(val) ||
            (Object.prototype.toString.call(val) === "[object Object]" &&
              val.toString === Object.prototype.toString)
          ? JSON.stringify(val, null, 2)
          : String(val);

      str.push(_str);
    });
    return str.join(",");
  }
}

class ArrayQueue {
  constructor(initData = []) {
    this.queue = [];
    this._init(initData);
  }
  _init(data) {
    if (Array.isArray(data)) {
      this.queue = this.queue.concat(data);
    } else {
      this.queue.push(data);
    }
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length <= 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }
  toString(){
    if (this.isEmpty()) {
      return "";
    }
    let str = [];
    this.queue.forEach((val) => {
      const _str =
        val == null
          ? ""
          : Array.isArray(val) ||
            (Object.prototype.toString.call(val) === "[object Object]" &&
              val.toString === Object.prototype.toString)
          ? JSON.stringify(val, null, 2)
          : String(val);

      str.push(_str);
    });
    return str.join(",");
  }
}

module.exports = {
  Queue,
  ArrayQueue
}