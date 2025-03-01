// let alice = ["Alice", "30", "alice@gmail.com"]
// let bob = ["Bob","bob@gmail.com" , "28", ]


//CRUD Object

//Create object
// Cách 1:
let alice = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
    isStudent: false,
}

// Cách 2:
let bob = new Object();
bob.name = "Bob";
bob.age = 16;
bob.email = "bob.email"
bob.isStudent = true;

// lưu ý: Trong object có nhiều key, và mỗi key thì có thể là các kiểu dữ liệu khác nhau

// console.log("alice: ", alice);
// console.log("bob: ", bob);

//Read object

// Cách 1:
// console.log(alice.email);

// Cách 2:
// console.log("bob age",bob["isStudent"]);

// Cách 3:
// let {name, age, email} = alice


//Update object

// alice.name = "Alice change";
// alice.age = "Ba mươi"
// alice.address = "Hà Nội"
// alice["school"] = "Đại học Quốc gia Hà Nội"
// alice["email"] = "change@gmail.com"
// console.log("Alice Name affter", alice.name)
// console.log("Object Alice", alice)

//Delete Object
// delete alice.address;
// delete alice["email"]

//Duyệt object

//Lấy ra key của object
// Cách 1:
// let keys = Object.keys(alice);
// let value = Object.values(alice);

// Cách 2:
// for (let key in alice) {
//     console.log(key)
// }



// Thực hành
// console.log("object alice", alice)

// console.log("name: alice")
// console.log("age: 30")
// console.log("email: alice@gmail.com")
// console.log("isStudent: false")

// console.log("=======")

// console.log("name: ", alice.name)
// console.log("age: ", alice.age)
// console.log("email: ", alice["email"])
// console.log("isStudent: ", alice["isStudent"])

// console.log("=======")

// - object alice : có những key gì
// - object alice: nếu có 1000 dòng thì console bằng tay mệt mỏi


// let aliceKeys = Object.keys(alice);
// // ['name', 'age', 'email', 'isStudent']

// for(let i = 0; i< aliceKeys.length; i ++){
//     const key_ = aliceKeys[i]
//     const value_ = alice[key_]


//     "name : Alice"
//     "age : 30"
//     "email : "email"
//     "isStudent : false"

// }


// Đề bài: log ra toàn thông tin về 1 Object dưới dạng String

// VD: 
// const khoa = {
//     name: "Khoa học máy tính",
//     address: "Hà Nội",
//     ...
// }

// Kết quả
// - "Name: Khoa học máy tính"
// - "Address: Hà Nội"
// . . . 



// Kết hợp array và object




let users = [{
    name: "cuong",
    password: "123",
}, {
    name: "khoa",
    password: "234",
}, {
    name: "hung",
    password: "345",
}]


let userName = users[0].name
let password = users[0].password
console.log("🔍 ~ lesson9/main.js:140 ~ userName:", userName)
console.log("🔍 ~ lesson9/main.js:142 ~ password:", password)

