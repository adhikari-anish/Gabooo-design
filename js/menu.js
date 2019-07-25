var navbarBurger = document.getElementsByClassName('navbar-burger');
var ul = document.getElementsByClassName('categories-ul');



navbarBurger[0].onclick = () => {
    ul[0].classList.toggle("shown");
}



var accImg = document.querySelector(".acc");
var accUl = document.querySelector(".acc-ul");

accImg.onclick = () => {
    accUl.classList.toggle("open");
}

// dropdown
var firstLi = document.querySelectorAll('.lang-curr-drop');
console.log(firstLi)
var langCurrDropdown = document.querySelectorAll('.lang-curr-dropdown');

firstLi.forEach(function(list, index) {
    list.onclick = () => {
        langCurrDropdown.forEach(function(innerList, innerIndex) {
            if(index == innerIndex) {
                innerList.classList.toggle('lang-curr-dropdown-visible');
            }
            
        })

    }
});