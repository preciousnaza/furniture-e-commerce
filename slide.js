
let next = document.querySelector(".bx-chevron-right");
let prev = document.querySelector(".bx-chevron-left");
let items = document.querySelectorAll(".swiper-slide");

let currentindex = 0;

function showimage(index){
    items.forEach( (img,i) => {
        img.classList.toggle("active" , i === index);
    });
}

next.addEventListener("click", () =>{
    currentindex  = (currentindex + 1) % 
    items.length;
    showimage(currentindex);
});

prev.addEventListener("click" , () =>{
    currentindex = (currentindex - 1 + items.length) %
    items.length
    showimage(currentindex);
})

