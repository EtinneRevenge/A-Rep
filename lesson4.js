// task 2

function logger() {
    console.log(`I output only external context: ${this.item} `);
}

const obj = { item: "some value" };

logger.bind(obj)();

logger.apply(obj);

logger.call(obj);

// task 3.1

const arr = [1, 2, 3, 4, 5];

arr.reduce((accumulator, current) => accumulator + current);

const arrayWithString = ['qwe', 'asd', 'zxc'];

arrayWithString.join();

const arrWithNumbers = [13, 55, -99, 3, 8, -12, 111, 9, 0];

const getMinMax = (arr) => {

    sorted = arr.sort((a, b) => a - b);
    console.log(`min is ${sorted[0]}, max is ${sorted[sorted.length - 1]}`);
};

// task 3.2

function StackByArray() {
    this.stack = [];
    this.pushItem = (item) => this.stack.push(item);
    this.popItem = () => this.stack.pop();
    this.getLastItem = () => console.log(this.stack[this.stack.length - 1]);
    this.isEmpty = () => console.log(this.stack.length == 0);
};

myStack = new StackByArray;

// task 3.3

function QueueByArray() {
    this.queue = [1];
    this.pushItem = (item) => this.queue.push(item);
    this.shiftItem = () => this.queue.shift();
    this.getFirstItem = () => console.log(this.queue[0]);
    this.isEmpty = () => console.log(this.queue.length == 0);
}

myQueue = new QueueByArray;
setTimeout(myQueue.pushItem.bind(myQueue, 2), 1000);
setTimeout(myQueue.pushItem.bind(myQueue, 3), 1000);
setTimeout(myQueue.getFirstItem.bind(myQueue), 1000);
setTimeout(myQueue.shiftItem.bind(myQueue), 2000);
setTimeout(myQueue.getFirstItem.bind(myQueue), 2000);
setTimeout(myQueue.shiftItem.bind(myQueue), 3000);
setTimeout(myQueue.getFirstItem.bind(myQueue), 3000);
setTimeout(myQueue.shiftItem.bind(myQueue), 4000);
setTimeout(myQueue.isEmpty.bind(myQueue), 4000);

// bonus task

Function.prototype.myBind = function (obj, ...args) {
    const func = this;
    return () => {
        func.call(obj, ...args);
    };
};

