const menuButton = document.querySelector('.menuButton');
const navMenu = document.querySelector('.navMenu');
const navList = document.querySelector('.navList');
let menuOpen = false;

menuButton.addEventListener('click', () => {
  if(!menuOpen) {
    menuButton.classList.add('open');
    navMenu.classList.add('open');
    navList.classList.add('open');
    menuOpen = true;
  } else {
    menuButton.classList.remove('open');
    navMenu.classList.remove('open');
    navList.classList.remove("open");
    menuOpen = false;
  }
});