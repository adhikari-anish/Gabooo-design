var headerSlideIndex = 0;
showHeaderSlides();

function showHeaderSlides() {
  let i;
  var headerSlides = document.getElementsByClassName('header-img');

  for (i = 0; i < headerSlides.length; i++) {
    headerSlides[i].style.display = "none";
  }
  headerSlideIndex++;

  if (headerSlideIndex > headerSlides.length) {
    headerSlideIndex = 1;
  }
  
  headerSlides[headerSlideIndex - 1].style.display = 'block';
  setTimeout(showHeaderSlides, 3000);
}