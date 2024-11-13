// task 1

let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "c";
    })
    .finally((res) => {
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => {
        console.log(res);
    });

//abc

// task 2

function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a);
        return a;
    })
    .then(function (b) {
        console.log("2", b);
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err);
    })
    .then(function (c) {
        console.log("4", c);
        return c;
    });

//1 123 2 123 3 321 4 undefind

// task 3

const arr = [10, 12, 15, 21];

async function logWithAwait(array) {
    for (let i = 0; i < array.length; i++) {
        await new Promise((resolve) => setTimeout(() => resolve(console.log(i)), 3000)
        );
    };
};
logWithAwait(arr);

// bonus task

async function fetchUrl(url) {
    for (let i = 0; i < 5; i++) {
        try {
            const response = await fetch(url);
            return response.json()
        }
        catch (err) {
            console.log('failed')
        };
    };
    throw new Error('failed 5 times');
};

fetchUrl('https://google/com&#39')
    .then((jsoned) => console.log(jsoned))
    .catch((err) => console.error(err));