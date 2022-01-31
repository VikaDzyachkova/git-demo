// TRUTHY & FALSY VALUES

// Falsy values: 
// false
// 0
// ""(empty string)
// null
// undefined
// NaN


// example 1
let mystery = '';

if (mystery) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}


// example 2
let loggedInUser1 = 'Nansy';
if (loggedInUser1) {
    console.log("You are Logged In")
}
else {
    console.log("Please, Log In")
}

let loggedInUser2;
if (loggedInUser2) {
    console.log("You are Logged In")
}
else {
    console.log("Please, Log In")
}


// AND && // NOT ! // OR ||

let password = 'taco lego';

if (password >=6 && password.indexOf(' ') === -1) {
    console.log('Valid password !')
}
else {
    console.log('Invalid password !')
}



let num = 2;
if (num >= 1 && num <= 10) {
    console.log("Number between 1 and 10")
}
else {
    console.log("Please guess a number between 1 and 10")
}




let age = 50;
if (age <=3 || age >=60) {
    console.log('You get in for free !')
}
else {
    console.log('That will be $10, please!')
}


let color = 'orange';
if (color === 'purple' || color === 'violet' || color === 'orchid') {
    console.log(`${color} - is a Great choice !`);
}
else {
    console.log(`${color} - isn't Good !`)
}



let loggedInUser;

// if there isn't a logged in user

if (!loggedInUser) {
    console.log('Get out of here !')
}



let flavor = 'grape';

if (flavor !== 'watermalon' && flavor !== 'cherry') {
    console.log(`We don't have that flavor !`)
}

if (!(flavor === 'watermalon' || flavor === 'cherry')) {
    console.log(`We have that flavor !`)
}

