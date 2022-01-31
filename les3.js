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





// Perfomance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement


// Example 1
let rating = 3;

if (rating === 3) {
    console.log("Superstar. Rating=3")
}
else if (rating === 2) {
    console.log("Meets expectations. Rating=2")
}
else if (rating === 1) {
    console.log("Needs improvement. Rating=1")
}
else {
    console.log("Invalid rating !")
}

// Example 2

let number = Math.random() * 10 + 1;

if (number < 1) {
    console.log("OK !! Number < 1")
}
else if (number > 1) {
    console.log("NOT OK ! Number > 1")
}

// Example 3

let highScore = 5000;
let userScore = Math.floor(Math.random()*10000);

if (userScore >= highScore) {
    console.log(
        `Congrats, you have the new high cscore of ${userScore}`
        );
    highScore = userScore;
}
else {
    console.log(
        `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
    );
}


// Example 4

let password = "ca t";

if (password.length <= 6) {
    if (password.indexOf(" ") !== -1) {
        console.log(`Valid password. Password cannot includ space.`);
        }
    else {
        console.log("Valid password. Password must be longer!");
    }
}
else {
    console.log("Password too short!")
}