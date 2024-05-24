const burger = document.getElementById("burger-menu")
const navList = document.getElementById("nav-list")
function openmenu(){
    navList.classList.toggle("nav-list-opened")
    burger.classList.toggle("burger-menu-opened")
}

burger.addEventListener("click", openmenu)