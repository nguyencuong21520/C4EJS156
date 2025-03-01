// Mảnh đất A

// const widthA = 5
// const heightA = 8

// const perimeterA = (width + height) * 2
// console.log("🔍 ~ lesson10/main.js:4 ~ perimeter:", perimeterA)

// Mảnh Đất B
// const widthB = 6
// const heightB = 10

// const perimeterB = (width + height) * 2
// console.log("🔍 ~ lesson10/main.js:4 ~ perimeter:", perimeterB)



// Đóng gói lại logic

// function todoInMorning(day, month) {
//     console.log("thứ: " + day)
//     console.log( month)
//     console.log("Thức dậy")
//     console.log("Đánh răng")
//     console.log("Ăn Sáng")
//     console.log("=======")
// }

// todoInMorning("hai", "Tháng 3")
// todoInMorning("Tháng 4", "năm")


function getPerimeter (width,height) {
    if(width > height){
        console.log("width phải bé hơn height")
    }
    const perimeter = (width + height) * 2

    return perimeter
}


// const donGia = 20
// const result = getPerimeter(2, 10)

// console.log("🔍 ~ lesson10/main.js:47 ~ giaTien:", giaTien)



// in ra số trong khoảng từ x -> y

// function countXtoY (x,y){
//     if(x>y){
//         console.log("x phải bé hơn y")
//     }
//     for (let i = x; i <= y; i++){
//         console.log(i)
//     } 
// }

// countXtoY(20, 2)
// countXtoY(50, 60)

//Cách 1
function ten(a, b,c,d,e,f){
    return a * b
}
ten(2,3)

//Cách 2
const arrowFunctionA = (a,b)=>{
    return a * b
}
// Cách 2.1
const arrowFunctionAA = (a,b) => a * b









const sum = (first, second, ...third) => {
    first = 1
    second = "hai"
    third = [3,4,5]
}

sum(1, "hai", 3, 4, 5) 