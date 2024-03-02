//Q2. Describe the categorization of operators in javascript based on their fuctionality. provids example for each category

// Solutions - operators in javascript are categorized based on their functiolity into the following groups

// 1] Arithemetic operator: These operation perform mathematical operations on operand . operands can be number or variabels

//Aditions(+)
const sum=1+2 //sum is now equal to 3
console.log(sum)

// substraction(-)
const substract=5-3
console.log(substract)

//Multiplication (*)
const product=4*9
console.log(product)

//Divison 
const div=10*5
console.log(div)

//Expontiation(**)
const power =2**3
console.log(power)

//Moduls(%)
const reminder=10%4
console.log(reminder)

// --------------------------------------------------------------------------------------------------------------------------------

// 2]Assignment operators: These operators assign value to variables

// Assignment operators(=)
let myVariable=10
console.log(myVariable)

//Addition assignment operators(+=)
myVariable+=5
console.log(myVariable)

//Substraction assignment operators(-=)
myVariable-=5
console.log(myVariable)

//multiplication assignmnet operators(*=)
myVariable*=5
console.log(myVariable)

//Division assignment operators(/=)
myVariable/=10
console.log(myVariable)

//Moduls Assignment operators
myVariable%=4
console.log(myVariable)

// ---------------------------------------------------------------------------------------------------------------------------------
// 3] Comparession oprators: These operators compare two values and return a Boolean value(True or False)

//Equal to (=)
const isEqual= 10==10
console.log(isEqual)

//not equal to(!=)
const isNotEqual = 10!=10
console.log(isNotEqual)

//Greater than(>)
const isGreaterThan= 10>5
console.log(isGreaterThan)

//Less than(<)
const isLessThan = 10>20
console.log(isLessThan)

//Greater than or equal to(>=)
const isGreaterThanOrEqual= 10>=10
console.log(isGreaterThanOrEqual)

//Less Than or equal or equal to (<=)
const isLessThanOrEqual = 10<=5
console.log(isLessThanOrEqual)

// ---------------------------------------------------------------------------------------------------------------------------------
// 4] Logical operators: These operators perform Logical operations on boolean CSSFontFeatureValuesRule.

//AND(&&)
const isAndTrue =true && true
const isAndFalse = true && false
console.log(isAndTrue,isAndFalse)

//OR(||)
const isOrTrue= true || false
const isOrFalse = false || false
console.log(isOrTrue,isOrFalse)

//NOT
const isNotTrue =!true 
const isNotFalse=!false
console.log(isNotTrue,isNotFalse)