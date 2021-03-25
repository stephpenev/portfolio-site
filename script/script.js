// Toggling menu icon open and closed //

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
    navList.classList.remove('open');
    menuOpen = false;
  }
});

// Toggling dev and design sections visible and invisible //

// Button variables
const devButton = document.querySelector('.devButton');
const designButton = document.querySelector('.designButton');

// Section variables
const devProjects = document.querySelector('.devProjects');
const designProjects = document.querySelector('.designProjects');
let devOpen = false;
let designOpen = false;

// Listening for button clicks, adding/removing classes:

devButton.addEventListener('click', ()=> {
  if (!devOpen) {
    devProjects.classList.add('open');
    devProjects.classList.remove('close');
    designProjects.classList.add('close');
    designProjects.classList.remove('open');
    devButton.classList.add('underline');
    designButton.classList.remove('underline');
  } else {
    devOpen = false;
  }
});

designButton.addEventListener('click', () => {
  if (!designOpen) {
    designProjects.classList.add('open');
    designProjects.classList.remove('close');
    devProjects.classList.add('close');
    devProjects.classList.remove('open');
    designButton.classList.add('underline');
    devButton.classList.remove('underline');
  } else {
    designOpen = false;
  }
});