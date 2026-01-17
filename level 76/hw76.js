// 2) Increment / Decrement
// Increment (++) ნიშნავს ცვლადის მნიშვნელობის 1-ით გაზრდას
// Decrement (--) ნიშნავს ცვლადის მნიშვნელობის 1-ით შემცირებას

let x = 5;
x++; // x გახდება 6
x--; // x ისევ გახდება 5



// 3) Literal string-ები
// Literal string არის ტექსტი, რომელიც წერია ბრჭყალებში (" " ან ' ' ან ` `)
// მათ ვიყენებთ ტექსტური ინფორმაციის შესანახად და გამოსატანად

let text = "ეს არის literal string";



// 4) += ოპერატორი
let num = 20;
num += 10; // იგივეა რაც: num = num + 10
console.log(num); // 30



// 5) ++ ოპერატორი ორჯერ
var a = 5;
a++;
a++;
console.log(a); // 7



// 6) Math.round() — დამრგვალება მთელ რიცხვამდე
let number = 4.6;
console.log(Math.round(number)); // 5



// 7) const ცვლადის შეცვლის მცდელობა
const myNumber = 10;
// myNumber = 20; ❌ ეს გამოიწვევს შეცდომას (TypeError)
// const ცვლადის მნიშვნელობა არ იცვლება



// 8) *= ოპერატორი
let n1 = 5;
let n2 = 4;
n1 *= n2; // n1 = n1 * n2
console.log(n1); // 20



// 9) -- ოპერატორი
let value = 20;
value--;
console.log(value); // 19


// 10) random რიცხვი 1-დან 50-მდე
let randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);



// 11) Literal string-ებით დიდი წინადადება
let name = "Nini";
let surname = "Beridze";
let age = 16;
let hobby = "programming";

let sentence = `My name is ${name} ${surname}, I am ${age} years old and my hobby is ${hobby}.`;

console.log(sentence);

