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
var firstLi = document.querySelectorAll('.lang-curr li > ul > li');
var langCurrDropdown = document.querySelectorAll('.lang-curr-dropdown');

firstLi.forEach(function(list, index) {
    list.onclick = () => {
        // console.log('clicked');
        langCurrDropdown.forEach(function(innerList, innerIndex) {
            // innerList.setAttribute("display", "none");
            if(index == innerIndex) {
                console.log(innerList);
                // innerList.style.display = 'none';
                innerList.classList.toggle('lang-curr-dropdown-visible');
            }
            
        })

    }
});