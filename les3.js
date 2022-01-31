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