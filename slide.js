
let next = document.querySelector(".bx-chevron-right");
let prev = document.querySelector(".bx-chevron-left");

next.addEventListener("click", function(){
    let items = document.querySelectorAll(".swiper-slide");
    let slide = document.querySelector(".heroslider");
    slide.appendChild(items[0]);
})
prev.addEventListener("click", function(){
    let items = document.querySelectorAll(".swiper-slide");
    let slide = document.querySelector(".heroslider");
    slide.prepend(items[items.length -1]);
})

