// 1) Arrow function – ეს არის ფუნქციის მოკლე ჩაწერის სინტაქსი.
// ის გამოიყენება უფრო სუფთა, მოკლე და წაკითხვადი კოდის დასაწერად.


const exampleArrow = () => {
  console.log("ეს არის arrow function");
};



const getAge = (age) => {
  return age * 2;
};

console.log(getAge(10)); 



const sayHello = (name) => {
  return `Hi ${name}`;
};

console.log(sayHello("Nini"));


function getNumber() {
  return 5;
}

function doubleNumber() {
  return getNumber() * 2;
}

console.log(doubleNumber());




function greet() {
  return "Hello";
}


const greet2 = function () {
  return "Hello again";
};

const greet3 = () => {
  return "Hello i am nini";
};

console.log(greet());
console.log(greet2());
console.log(greet3());
