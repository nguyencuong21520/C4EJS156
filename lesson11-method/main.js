// let arr = [10, 20, 30, 40, 50];

// 1. Push : them phan tu vao cuoi mang
// arr.push(7);

// 2. Map

// out put : [2, 4, 6, 8, 10]

// Cach 1:
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let newItem = arr[i] * 2;
//   newArr.push(newItem);
// }

// Cach 2:
// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.map((value) => {
//   return value / 2;
// });

// Filter

// Cach 1
// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArray.push(arr[i]);
//   }
// }

// Cach 2
// let arr = [1, 2, 3, 4, 5, 8, 9, 10];

// let newArray = arr.filter((value) => {
//   return value % 2 !== 0;
// });
// console.log(newArray);

//Find

// let arr = [1, 2, 3, 4, 5, 8, 9, 10];
// Cách 1

// let result;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 5) {
//     result = arr[i];
//     break;
//   }
// }

// Cách 2

// let result = arr.find((value) => {
//   return value > 5;
// });

// // findIndex

// let index = arr.findIndex((value) => {
//   return value > 5;
// });
// console.log("🚀 ~ index ~ index:", index);

//Splice

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(3);

// console.log(numbers); // Output: [1, 2, 6, 7, 3, 4, 5]
// Output: [1,2,3];

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // đưa các phần tử của mảng arr1 vào mảng arr2

// console.log(arr2); // Output: [1, 2, 3]

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer" };
const obj3 = { ...obj1, ...obj2 }; // Trộn các thuộc tính của obj1 và obj2, đưa vào 1 object mới

// console.log(obj3);

let arr = [1, 2, 3];
let arrCopy = [...arr];

arr.push(5);

console.log("🚀 ~ arrCopy:", arrCopy);
