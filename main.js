import Lenis from "lenis";
import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true });
  // Lenis initialization and other code here
});

const lenis = new Lenis({
  duration: 1,
});

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.getElementById("video-check").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("video-container").style.display = "flex";
  } else document.getElementById("video-container").style.display = "none";
});

const date = new Date();

document.getElementById("year").innerText = date.getFullYear();

document.getElementById("video-close").addEventListener("click", () => {
  document.getElementById("video").src = "";
});

document.getElementById("play").addEventListener("click", () => {
  document.getElementById("video").src =
    "https://www.youtube.com/embed/Os1oDqefGOA?si=ZNoNK5qI3_0xqDn8";
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  breakpoints: {
    // When screen width is <= 480px (Mobile)
    600: {
      slidesPerView: 1, // 1 slide for mobile
    },
    // When screen width is >= 768px (Tablet)
    768: {
      slidesPerView: 2, // 2 slides for tablets
    },
    1024: {
      slidesPerView: 3, // Default for PC
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("href").substring(1); // Remove #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust 50px offset if needed
          behavior: "smooth",
        });
      }
    });
  });
});

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = Lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `${0}px`;
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      navContent.style.boxShadow = "0 0 20px 0 #2B245D21";
      navContent.style.position = "fixed";
    } else {
      navContent.style.boxShadow = "none";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
