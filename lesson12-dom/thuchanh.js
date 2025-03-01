// const bai1 = document.querySelector(".titleH1");
// const btnClick = document.querySelector(".btnClick");

// let coMau = false


// btnClick.addEventListener("click", () => {
//     if(coMau){
//         bai1.innerText = "This is Content"
//         bai1.style.color = ""
//         bai1.style.backgroundColor = ""
//     }else{
//         bai1.innerText = "Đây là nội dung"
//         bai1.style.color = "red"
//         bai1.style.backgroundColor = "green"
//     }
//     coMau = !coMau
// });

const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitBtn");
const listingDom =   document.querySelector("#listing");

const listing = [] 

submitBtn.addEventListener("click", ()=>{
    const inputValue = inputBox.value;
    if(inputValue){
        listing.push(inputValue)

        const htmlContent = listing.map((item) => {
            return `<li>${item}</li>`
        }).join("")
        
        listingDom.innerHTML = htmlContent;

        inputBox.value = ""
    }

})





