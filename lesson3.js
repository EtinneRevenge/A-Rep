// task 1

const counter = {
    value: 0
};

const counter1 = new Object();

const counter2 = Object.create({});

// task 2

const cloneCounter = {};
for (let key in counter) {
    cloneCounter[key] = counter[key];
};

const cloneCounter2 = Object.assign({}, counter);

const cloneCounter3 = { ...counter };

const cloneCounter4 = JSON.parse(JSON.stringify(counter));

const cloneCounter5 = structuredClone(counter);

// task 3

function makeCounter() {
    let count = 0
    return function () {
        return count++
    }
};

const makeCounter1 = function () {
    let count = 0
    return function () {
        return count++
    }
};

const makeCounter2 = () => {
    let count = 0
    return function () {
        return count++
    }
};

const makeCounter3 = function innerMakeCounter3() { };

function MakeCounter(count) {
    this.counter = count

};

// bonus task 1

const obj1 = {
    here: {
        is: "on",
        other: "2"
    },
    object: "Y"
};

const obj2 = {
    here: {
        is: "on",
        other: "3"
    },
    object: "Y"
};

const deepEqual = (obj1, obj2) => {
    if (obj1 !== null && obj2 !== null) {
        for (let key in obj1) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                const resault = deepEqual(obj1[key], obj2[key])
                if (!resault) return false
            }
            else {
                if (obj1[key] !== obj2[key]) return false
            }

        }
        return true
    }
};

// bonus task 2

function reverseStr(str) {
    return str.split('').reverse().join('');
};
