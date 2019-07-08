var navbarBurger = document.getElementsByClassName('navbar-burger');
var ul = document.getElementsByClassName('categories-ul');

// navbarBurger.onclick = function() {toggleFun()};

function toggleFun() {
    ul[0].classList.toggle("open");
    console.log(navbarBurger[0]);
}

// console.log(navbarBurger);