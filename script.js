console.log("JS is connected! Boombayah")

// Fundamental data types

const studentID = "234311462"; //constants don't change.

let firstName = "Ian"; //variables can be used for anything + can be changed.
let age = "17";
let year = "2026";
let major = undefined;

console.log(firstName, age);

// Reassignment (no let)

age = 20;
age = age + 10; //which is the same thing as age += 1
console.log(firstName, age);

// Essential Operations

age + 10;
age - 5;
age * 5;
age / 2;

// Additional operations

console.log(Math.round(5.8));
console.log(Math.floor(23)); //floor will always round down
console.log(Math.ceil(5.8)); //ceil(ling) always rounds UP!

// Concatenation v. templates

    //option 1 (which we don't like)
let string1 = firstName + " is " + age + " years old."

    //option 2 (which is way better!)
let string2 = `${firstName} is ${age} years old.` //must use back tick!!!
console

console.log(string1);
console.log(string2);

// String methods

console.log(string1.toUpperCase());
console.log(string1.includes("old"));

// Comparison operators - true or false?

age == 10; //checking to see if the two are the same
"42" === 42; //have to be the exact same
age > 19;
age <= 19;
year === "freshman";

// Conditional statements;

let username = "MilesMorales";
let age2 = 18;

if ( username === "Miles" && age2 === 18) {
    console.log("Welcome, Spiderman");
} else if (age2 <18) {
    console.log("unauthorized youth access!")
} else {
    console.log(`welcome ${username}!`)
}

// functions

    // Returns half the number if it can be halved; otherwise returns false

function getHalf (x) {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return false;
    }
}

a = getHalf(10);
b = getHalf(22);
c = getHalf(3);

console.log(a, b, c);
    // % means Mod, which gives u the remainder


// Functions can also be written as arrows. Body of function doesn't change, just the signature. Maybe want to practice more?

const getHalf2 = (x) => {
    if (x % 2 === 0) {
        return x/2;
    } else {
        return false;
    }
}

//PRACTICE FUNCTIONS

    //doubling function in both old and arrow function way

function double (x) {
    return x*2;
}

console.log(double(21));

const double2 = (x) => {
    return x*2;
}

console.log(double(21));

    //Likely a verb? If the word engs in -ing it is likely a verb, return true, else return false

function likelyVerb (x) {
    if(x.includes("ing")) {
        return `${x} is likely a verb`;
    }
    else {
        return false;
    }
}

const likelyVerb2 = (x) => {
    if(x.includes("ing")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(likelyVerb("bling"));