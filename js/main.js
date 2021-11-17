
let burger = document.querySelector('.header-burger');
let showMenu = document.querySelector('.header-block__menu');

burger.addEventListener('click', f1);

function f1() {
   if (showMenu.style.display === "block") {
      showMenu.style.display = "none";
  } else {
      showMenu.style.display = "block";
  }
}


burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})


$('.slyder__wrap').slick({
   infinite: true,
   slidesToShow: 1,
   adaptiveHeight: true,
   arrows: true
 });