// 2) Hoisting
// Hoisting არის JavaScript-ის მექანიზმი,
// როდესაც ცვლადების და ფუნქციების დეკლარაცია "იწევა" კოდის დასაწყისში
// ანუ მათ გამოყენება შეიძლება დეკლარაციამდე

// function declaration სრულად იჰოისტება
sayHello();

function sayHello() {
  console.log("Hello!");
}

// var იჰოისტება, მაგრამ მნიშვნელობა არა
console.log(a); // undefined
var a = 10;

// let და const არ იჰოისტება გამოყენებისთვის
// (არსებობენ temporal dead zone-ში)
// console.log(b); ❌ error
let b = 20;



// 3) switch case მაგალითი
let day = Number(prompt("შეიყვანეთ რიცხვი 1-დან 7-მდე"));

switch (day) {
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  case 7:
    console.log("კვირა");
    break;
  default:
    console.log("არასწორი რიცხვი");
}



// 4) division ფუნქცია
function division(a, b) {
  return a / b;
}

console.log(division(10, 2)); // 5



// 5) powerOf ფუნქცია
function powerOf(a, b) {
  return a ** b;
}

console.log(powerOf(2, 5)); // 32



// 6) returnPi ფუნქცია
function returnPi() {
  return Math.PI;
}

console.log(returnPi());
