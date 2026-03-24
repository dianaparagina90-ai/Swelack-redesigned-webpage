const slides = document.querySelectorAll(".carousel img");
const toggle= document.querySelector(".menu-toggle");
const navbar=document.querySelector(".navbar");

let index =0;

setInterval(()=>{
    slides[index].classList.remove("active");
    index = (index+1) % slides.length;
    slides[index].classList.add("active")
},4000);

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});