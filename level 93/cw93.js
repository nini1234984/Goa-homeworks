// function manualMap(array, callback){
//     let result=[];

//     for(let i=0; i < array.length; i++){
// result.push(callback(array[i]));

//     }
//     return result;
    
// }

// for each გამოიყენება იმისათვის, რომ მასივის თითოელ ელემენტზე გავატაროთ ფუნქცია
// map იღებს მასივს და აბრუნებს ახალ მასივს, სადაც თითოეული ელემენტი გამოიცვლება შენი ფუნქციის მიხედვით.
// filter აბრუნებს ახალ მასივს რომელშიც არის მხოლოდ ისეთი ელემენტები, რომლებიც გვატყობინებს პირობითი ფუნქცია (true)
// reduce იღებს მასივს და ამცირებს ან ამოკლებს მას ერთ საბედნიერო მნიშვნელობამდე (მაგ. ჯამი, საშუალო, ობიექტი

const numbers = [5, 10, 15, 20];

numbers.forEach(num => {
  console.log("Number is: " + num);
});



const number = [2,4,5,6,8,11,12];

const result = number.filter(num => num % 2 === 0 && num > 5);

console.log(result);




const num = [1,2,3,4,5,6,7,8,9];

const resul = num
  .filter(num => num % 2 === 0)  
  .map(num => num * 3)           
  .reduce((sum, num) => sum + num, 0); 

console.log(resul);









