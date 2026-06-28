const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){

    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

});