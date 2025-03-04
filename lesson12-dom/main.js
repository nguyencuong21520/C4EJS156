// B1: Tìm ra cái vị trí mình muốn sửa
// B2: Thay đổi nội dung

// Query Dom
// const element = document.getElementById("heading_2")

// const element2 = document.getElementsByClassName("content_2")

// const paragraphs = document.getElementsByTagName('p');

// const firstDivParent = document.querySelector('p');

// const flexItems = document.querySelectorAll('div.flex div.item');

// Thao Tác với DOM

// const element = document.querySelector("#heading_2")

// console.dir(element)
// element.innerText = "Hello World"
// element.innerHTML = "<a href='https://www.google.com/'><span>Hello</span></a>"
// element.style.backgroundColor = "red"

// const img_ = document.querySelector("#img_")
// img_.src = "https://i.pinimg.com/474x/5e/af/81/5eaf81c562fe30fb9f921184cced7acf.jpg"
// console.dir(img_)

const btn_ = document.querySelector(".say");

btn_.addEventListener("click", () => {
  alert("Hello World");
});
