const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const aside = document.querySelector("aside"); 


openMenu.addEventListener("click", () =>{

    aside.classList.add("aside-visible");

}) 

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})