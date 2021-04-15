// Toggling menu icon open and closed //

const menuButton = document.querySelector('.menuButton');
const navMenu = document.querySelector('.navMenu');
const navList = document.querySelector('.navList');
const toTop = document.querySelector(".toTop");
const toContact = document.querySelector(".aboutContact");
let menuOpen = false;

console.log(`~~ Designed + Developed by Stephanie Penev ~~`);

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

// Smooth Scroll to sections in Menu

// navList.addEventListener('click', (event) => {
//   if (event.target.tagName == "LI") {
//     const type = event.target.className;
//     const scrollTo = document.querySelector("#" + type);
//     scrollTo.scrollIntoView({ behavior: "smooth" });
//   }
// });

function anchorLinkHandler(e) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach((each) => (each.onclick = anchorLinkHandler));

// Smooth scroll for To Top and Contact links

// Move empty object to top and namespace other functions:
myApp = {};

const rootEl = document.documentElement;

myApp.scrollToTop = function () {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

toTop.addEventListener("click", myApp.scrollToTop);


toContact.addEventListener('click', () => {
  const scrollToContact = document.getElementById("contact");
  scrollToContact.scrollIntoView({ behavior: "smooth" });
})

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