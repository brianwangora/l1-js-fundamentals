// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
//const pi = 3.142
//printValue(pi)
// cannot change value of const. cannot be redeclared or reassigned.


//TODO: ADD redeclarable variable.
// var is redeclarable but only by the same identifier. The value changes as below.
var radius = 5
var radius = 70
//printValue(radius)

//TODO: ADD re-assignable but not redeclarable variable
let age = 18
age = 20
//printValue(age)
//let radius = 20
// radius cannot be redeclared with let because it was declared with var
//printValue(radius)


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num1 = 18000

//TODO: Create a redeclarable variable with a boolean value. true/false
let rain = true
rain = false
//printValue(rain)

//TODO: Create a re-assignable variable with a string value
// string values should be enclosed in either '', "", or ``.
let greeting = "Hello"
//printValue(greeting)

let firstName = "Joy"
let lastName = "Kemunto"
//printValue(lastName)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let fullName = firstName + ' ' + lastName
//printValue("Name: " + fullName)
//Name: Joy Kemunto

//TODO: Interpolate string (`${}`)
let otherName = `Name: ${fullName}`
//printValue(otherName)
let anotherName = `Name: ${firstName + ` `+ lastName}`
//printValue(anotherName)
let yetAnother = `Name: ${firstName} ${lastName}`
//printValue(yetAnother)

//TODO: Convert to uppercase
//printValue(fullName.toUpperCase())


//TODO: Convert to lowercase
//printValue(fullName.toLowerCase())

//TODO: Index a specific character
let lower = fullName.toLowerCase()
let ind1 = lower.charAt(10)
//printValue(ind1)


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality. (===). checks whether type and value are the same.
// always return boolean statements (true or false).



//TODO: strict inequality. (!==).

//TODO: loose equality. (==). only compares the value. doesn't care about the type.
// 5 == '5' will return true even though not same type

//TODO: loose inequality (!=)


//TODO: greater than (>)
// 5>5 is false

//TODO: less than (<)


//TODO: greater or equal to (>=)
// 5 >= 5 is true

//TODO: less or equal to (<=)



// 5.0 CONTROL FLOW
// TODO: if-else statement


//TODO: switch-case






