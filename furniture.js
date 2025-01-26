const navList = document.querySelector(".nav-list");
const hambuger = document.querySelector(".hambuger")

if (hambuger) {
    hambuger.addEventListener("click", () =>{
        navList.classList.toggle("open");
    });
}