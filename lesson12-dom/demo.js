// Lấy ra DOM
let title = document.getElementById('title');
let description = document.getElementById('description');
let inputBox = document.getElementById('inputBox');
let changeTextBtn = document.getElementById('changeTextBtn');
let toggleClassBtn = document.getElementById('toggleClassBtn');
let hideTextBtn = document.getElementById('hideTextBtn');

toggleClassBtn.addEventListener("click", ()=>{
    title.classList.toggle("highlight");
})

hideTextBtn.addEventListener("click", ()=>{
    // description.classList.toggle("hidden");
    if(description.style.display == "none"){
        description.style.display = "block";
    }else{
        description.style.display = "none";
    }
})

changeTextBtn.addEventListener("click", ()=>{
    const content = inputBox.value
    title.innerText = content;
})
