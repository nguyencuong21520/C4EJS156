// Create an initial array
// const fruits = ["apple", "banana", "orange"];
// console.log("Original array:", fruits);
// fruits.push("mango");


//Sử dụng map() để tạo ra một mảng mới với các giá trị là bình phương của các số trong mảng ban đầu.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
  return number * number;
});


//gen js code for me: Sử dụng filter() để lọc ra các số chẵn trong mảng.

// Filter even numbers from the array
const evenNumbers = numbers.filter((number ) => {
    return number % 2 === 0;
});

let students = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }]

let student = students.find((student) => {
  return  student.score >= 8
})

console.log("student", student)
