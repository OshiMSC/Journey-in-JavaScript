console.log('Hello, JavaScript!');//print statment

let firstName = 'oshadee';
let lastName = 'Kaushalya';
console.log("This is my name: " + firstName + " " + lastName);

//creating an object:

let person ={
    name :'oshadee',
    age: 27,
    address : 'Sri Lanka'
};
//accessing object properties
//dot notation
person.name = 'Kaushalya';
//bracket notation
person['age'] = 28;
console.log(person);

//creating an array
let colorArrays = ['red', 'green', 'blue'];
colorArrays[3] = 2//adding an element to the array
console.log(colorArrays);

//creating a function

function myData(name , age){
    console.log(name + " is " + age + " years old.");
}

myData('Oshadee', 28 );

//Calculating Values
function square(number){
    return number * number;
}

let value = square(10);
console.log("The square of 10 is: " + value);
