let fullName = "Reina Guajardo"; // variable value
console.log(fullName);

let age = 3;

function1();

function function1(){ 
console.log(age);
} // global variable

{
    let year = 2024;
  }
  // block scope

  let y = 100 + 20; //mathematical operation variable
  console.log(y);


  let text1 = "25";
  let text2 = "5";
  let result = text1 < text2; //string variable
    console.log("My favorite numbers a is " + text1 + text2);



const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers);

//Assignment 3.4 - Functions and Parameters Below,

const food = [
  { name: 'Pepsi', calories: 150 },
  { name: 'Twinkie', calories: 135 },
  { name: 'Apple', calories: 95 },
];

food.forEach(function(food) {
  console.log(food.name + ' - ' + food.calories);
}); //Function : display name and calories 
// parementsn In are name and calories
//parameter Out will display both together with a hypen in between


const person = {
  firstName: "John",
  lastName: "Doe",
  country:"Norway"
};

console.log(person.firstName + ' - ' + person.lastName+ ' - ' + person.country);
//object with Property Create an object with multiple properties

//Event is shown on the HTML page


let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
text5 = text5.replaceAll("Cats","Dogs");
text5 = text5.replaceAll("cats","dogs");

console.log(text5); //Method


//Assignment 4.6 - Strings and Conditionals Below,

let petName = "Pickles";

console.log("My pets name is " + petName + "." ); //concatenated string variable.


const speed = 100;
if (speed > 75) {
  console.log("Too Fast!")
} else {
  console.log("Good Speed"); //"If" Conditional statement
}



const car = "Subaru";
 
switch (car) {
  case "Honda":
    console.log("I own a Honda");
    break;
  case "Audi":
    console.log("I own a Audi");
    break;
  case "Toyota":
    console.log("I own a Toyota");
    break;
  case "Jeep":
    console.log("I own a Jeep");
    break;
  case "Kia":
    console.log("I own a Kia");
    break;
  default:
    console.log("I don't own a pet");
    break;
}// Switch Statement


let text = "supercalifragilisticexpialidocious";
let length = text.length;
console.log(text.length); // String Method


let x = 6.33;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
console.log(x.toExponential(2) + ' - '+ x.toExponential(4) + ' - '+ x.toExponential(6)); //Number method


//Assignment 5.4 Assignment: Loops and DOM,

for (let i = 1; i <= 3; i++) {
  console.log(`Testing 1...2...3`);
}//For Loop

let username = "";

while(username === ""){
username = window.prompt(`you didn't enter your name`);
}
 console.log(`Hello ${username}`);//While Loop



//Change CC with JS
const newH1 = document.createElement("h1")

newH1.textContent = "I like pizza!"
newH1.id = "myH1"
newH1.style.color = "pink";
newH1.style.textAlign = "center";
document.body.prepend(newH1);
//Change CC with JS





document.body.style.backgroundColor = "orchid";
console.log(document.body.style.backgroundColor);
document.body.style.backgroundColor = "#89CFF0";// babyblue color
//Change CSS based upon a variable value



