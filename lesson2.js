// string
const Hi = "Hi";
const anotherString = 'string';
const valueString = `2+2=${2 + 2}`;
const stringFromNumber = String(111.11);
const stringFromNumber2 = 22 + '';

//number
const value = 100;
const infinitValue = Infinity;
const numberFromString = Number('333');
const numberFromString2 = +333;
const reducedValue = (3 - '1');

//boolean
const isAdmin = false;
const oneLessToFour = 1 < 4;
const valueToBoolean = Boolean(123);
const valueToBoolean2 = !!0;

// null
const notInitializedvalue = null;
const element = document.getElementById('not-exists')

//undefined
let withoutValue;
console.log(withoutValue);

const obj = {};
console.log(obj.value);

//symbol
const id = 'q1w2e3';
const idSymbol = Symbol(id);
const stringSymbol = Symbol('Hello');
const numberSymbol = Symbol(888);

//bigInt
const zeroBigInt = 0n;
const negativeBigInt = -9n;
const someBigInt = 123456n;
