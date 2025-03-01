//Bài 1

function linearFunction(x){
    const a = 3
    const b = 4
    const result = a*x + b
    return result
}
// console.log(linearFunction(5)) 

// Bài 2
function rectanglePerimeter(width, height){
    if(width > height){
        console.log("width phải bé hơn height")
        return 
    }
    const perimeter = (width + height) * 2
    return perimeter
}

// Bài 3
function circleArea(r){
    const area = Math.PI * r * r
    return area.toFixed(2)
}

//Bài 4
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

// Bài 5
function sum (...numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}

// Bài 6
function sumRange(start, end){
    if(start > end){
        console.log("start phải bé hơn end")
        return
    }

    let sum = 0
    for(let i = start; i <= end; i++){
        sum += i
    }
    return sum
}

// Bài 7
function isPalidrome (str){
    const reversed = str.split("").reverse().join("")
    return str == reversed
}

// Bài 8
function allEven(arr){
    // arr = [2,4,5,6,8]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            return false
        }
    }
    return true
}

console.log(allEven([2,4,5,6,8]))



//give me a xample of break in for in

// Example of break in for...in loop
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

for (let property in person) {
    if (property === "city") {
        break; // Stops the loop when property is "city"
    }
    console.log(`${property}: ${person[property]}`);
}
