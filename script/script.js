const myApp = {};
console.log(`~~ Designed + Developed by Stephanie Penev ~~`);

// Toggling menu open and closed //

myApp.toggleMenu = function () {
  const menuButton = document.querySelector(".menuButton");
  const navMenu = document.querySelector(".navMenu");
  const navList = document.querySelector(".navList");
  const menu = document.querySelector("#menu");
  let menuOpen = false;

  menuButton.addEventListener("click", () => {
    if (!menuOpen) {
      menuButton.classList.add("open");
      navMenu.classList.add("open");
      navList.classList.add("open");
      menu.setAttribute('aria-expanded', 'true');
      menuOpen = true;
    } else {
      menuButton.classList.remove("open");
      navMenu.classList.remove("open");
      navList.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menuOpen = false;
    }
  });
};

// Smooth Scroll to sections from Menu

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

  const linksToAnchors = document.querySelectorAll('a[href^="#"]');
  linksToAnchors.forEach((each) => (each.onclick = anchorLinkHandler));
};

// Smooth scroll for To Top and Contact links

myApp.scrollButtons = function () {
  const toContact = document.querySelector(".aboutContact");
  const scrollToContact = document.getElementById("contact");
  const rootEl = document.documentElement;
  const toTop = document.querySelector(".toTop");
  const scrollToTop = function () {
    rootEl.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  toTop.addEventListener("click", scrollToTop);

  toContact.addEventListener("click", () => {
    scrollToContact.scrollIntoView({ behavior: "smooth" });
  });
};

// Toggling dev and design sections visible and invisible //

myApp.toggleProjects = function () {
  const devButton = document.querySelector(".devButton");
  const designButton = document.querySelector(".designButton");
  const devProjects = document.querySelector(".devProjects");
  const designProjects = document.querySelector(".designProjects");
  let devOpen = false;
  let designOpen = false;

  devButton.addEventListener("click", () => {
    if (!devOpen) {
      devProjects.classList.add("open");
      devProjects.classList.remove("close");
      designProjects.classList.add("close");
      designProjects.classList.remove("open");
      devButton.classList.add("underline");
      designButton.classList.remove("underline");
    } else {
      devOpen = false;
    }
  });

  designButton.addEventListener("click", () => {
    if (!designOpen) {
      designProjects.classList.add("open");
      designProjects.classList.remove("close");
      devProjects.classList.add("close");
      devProjects.classList.remove("open");
      designButton.classList.add("underline");
      devButton.classList.remove("underline");
    } else {
      designOpen = false;
    }
  });
};

// Init App

myApp.init = function () {
  myApp.scrollButtons();
  myApp.toggleMenu();
  myApp.toggleProjects();
};

myApp.init();
