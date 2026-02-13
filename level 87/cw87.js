let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let elements = arr.splice(2, 3);


for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}


console.log(arr);


for (let i = 100; i <= 200; i += 5) {
  console.log(i);
}


for (let i = 200; i >= 100; i -= 5) {
  console.log(i);
}