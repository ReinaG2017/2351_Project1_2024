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