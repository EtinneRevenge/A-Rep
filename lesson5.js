// task 3

const Person = {
    name: 'Stepan',
    surname: 'Medvedev',
    sayHi() {
        console.log('Hi!');
    }
};

const Person2 = Object.create(Person, { name: { value: 'Akim' }, surname: { value: 'Grebenkin' } });

Person.logInfo = function () {
    console.log(this.name, this.surname);
};

////////

function myPerson(name, surname) {
    this.name = name;
    this.surname = surname;
    this.sayHi = function () {
        console.log('Hi!');
    };
};

const myPerson2 = new myPerson('Victor', 'Nemec');

myPerson.prototype.logInfo = function () {
    console.log(this.name, this.surname);
};

/////////


class PersonClass {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
    sayHi() {
        console.log('Hi')
    }
};

PersonClass.prototype.logInfo = function () {
    console.log(this.name, this.surname);
};

const PersonClass2 = new PersonClass('Nikita', 'Charny');

// task 4

class PersonThree {
    #name

    get name() {
        return this.#name;
    };
    set name(value) {
        this.#name = value;
    };
};

class PersonExtended extends PersonThree {
    constructor(job) {
        super();
        this.job = job;
    };

    logInfo() {
        console.log(this.name, this.job)
    };
};

const dev = new PersonExtended('FrontDev')

dev.name = 'Robert';
console.log(dev.name);
dev.logInfo();

// bonus task 1

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    const set = new Set(arr);
    for (let num of arr) {
        const remainder = total - num;
        if (set.has(remainder)) {
            return result = [num, remainder];
        };
    };
};

// console.log(firstSum(arr, total))

// bonus task 2
// Сложность алгоритма O(n)

