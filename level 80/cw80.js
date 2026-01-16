// Hoisting არის JavaScript-ის მექანიზმი,
// რომლის დროსაც ცვლადებისა და ფუნქციების დეკლარაციები
// ავტომატურად "იწევა" კოდის თავში შესრულებამდე.

// var - ით გამოცხადებული ცვლადი hoist-დება,
// მაგრამ მნიშვნელობა ენიჭება მხოლოდ იქ, სადაც წერია
console.log(a); 
var a = 10;

sayHello();

function sayHello() {
  console.log("Hello!");
}


let name = "davit";

switch (name) {
  case "davit":
    console.log("გამარჯობა დავით!");
    break;
  case "nikolozi":
    console.log("გამარჯობა ნიკოლოზ!");
    break;
  case "vazha":
    console.log("გამარჯობა ვაჟა!");
    break;
  default:
    console.log("რა გითხრათ რით გაგახაროთ!");
}


function greet(name) {
  return "გამარჯობა " + name + "!";
}

console.log(greet("ნინი"));


function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(5, 4)); 


function substriction(a, b) {
  return a - b;
}

console.log(substriction(10, 3)); 



function ageChecker(age) {
  if (age > 18) {
    return "სრულწლოვანი";
  } else {
    return "შენ ხარ მოზარდი";
  }
}

console.log(ageChecker(20));
console.log(ageChecker(15));

