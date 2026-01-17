let num = Number(prompt("შეიყვანეთ რიცხვი"));

if (num > 50) {
  console.log("big");
} else if (num < 50 && num > 25) {
  console.log("medium");
} else {
  console.log("small");
}


let num2 = Number(prompt("შეიყვანეთ რიცხვი"));

num2 > 50
  ? console.log("big")
  : num2 > 25
  ? console.log("medium")
  : console.log("small");


let num3 = Number(prompt("შეიყვანეთ რიცხვი"));
let result;

switch (true) {
  case num3 > 50:
    result = "big";
    break;
  case num3 > 25:
    result = "medium";
    break;
  default:
    result = "small";
}

console.log(result);



// if else გამოიყენება მაშინ, როცა ბევრი პირობის შემოწმება გვჭირდება
// ყველაზე მარტივი და წაკითხვადი ფორმაა

// ternary operator არის მოკლე ფორმა if else-ის
// გამოიყენება მარტივი პირობებისთვის ერთ ხაზში

// switch case გამოიყენება მაშინ, როცა ბევრ კონკრეტულ case-ს ვამოწმებთ
// მაგალითად: დღეები, თვეები, მენიუები და ა.შ.




// რეკურსია არის ფუნქცია, რომელიც საკუთარ თავს იძახებს
// გამოიყენება რთული ამოცანების პატარა ნაწილებად დასაშლელად

function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

// this keyword ობიექტში მიუთითებს იმ ობიექტზე,
// რომელშიც ამჟამად ვიმყოფებით

let user = {
  name: "Nini",
  age: 16,
  info() {
    console.log(this.name); // სწორია
    // console.log(user.name); ❌ არ არის რეკომენდებული
  }
};


