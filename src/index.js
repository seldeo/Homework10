//let title = document.getElementById("title");
//title.style.backgroundColor = "blue";


const DOM = document.getElementById('DOM');
const sel =document.getElementById('sel');


//Using Js to style my first paragraph
//let DOM = document.getElementById("DOM");
DOM.addEventListener("click", () => {
DOM.style.backgroundColor = "gray";
DOM.style.color = "black";
DOM.innerHTML = "I know now what the DOM is 🤲 ";
}) ;


//Using Js to style my Second Paragraph
let sel1 = document.getElementById("sel");
sel.addEventListener("click",() => {
sel.style.backgroundColor = "gray";
sel.style.color = "black";
sel.innerHTML = "I know now what the DOM is 🤲 ";
}) ;



//Using Js to style my third paragraph
//let use = document.getElementById("use");
use.addEventListener("click",() => {
use.style.backgroundColor = "green";
use.style.color = "black";
use.innerHTML = "I know how to use the style methods to change the style of an element in the DOM ✅";
}) ;


//Using Js to style my fourth paragraph
//let styl = document.getElementById("styl");
styl.addEventListener("click",() => {
styl.style.backgroundColor = "purple";
styl.style.color = "white";
styl.innerHTML = "I know how the styling properties differ in JS from CSS👍";
}) ;


//using Js to style my fifth paragraph
let excited = document.getElementById("Excited");
excited.addEventListener("click",() => {
excited.style.backgroundColor = "pink";
excited.style.color = "white";
excited.innerHTML = "Yes I did it!! I manipulated the DOM and styled my elements 🥰🥰🥰🥰";
}) ;



function Showimage(params) {
    let image1 = document.getElementById("Me");
    image1.style.display="block";
    
}
let button1 = document.getElementById("Of");
button1.addEventListener("click",Showimage);