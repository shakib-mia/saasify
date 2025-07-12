import Lenis from "lenis";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
  autoplay: {
    delay: 3000,
  },
  modules: [Autoplay],
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

document.getElementById("navbar-container").style.color = "#fff";

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = window.pageYOffset;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;
    const navbar = document.getElementById("navbar-container");
    const navLinks = document.querySelectorAll("#navbar-container li a");
    const signupButton = document.getElementById("signup-button");

    // Determine direction
    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }
    lastScrollY = currentScrollY;

    // Always: set background if scrolled
    if (currentScrollY > 0) {
      navbar.style.background = "#fff";
      navbar.style.boxShadow = "0 0 10px #ccc";

      navLinks.forEach((link) => {
        link.style.color = "#0F0BC7"; // black text
      });

      signupButton.classList.add("gradient");
      signupButton.classList.remove("btn-white");
      navbar.style.color = "#0F0BC7";
    } else {
      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";

      navLinks.forEach((link) => {
        // link.style.color = "#fff"; // white text
        if (window.innerWidth >= 768) {
          link.style.color = "#fff";
        } else {
          link.style.color = "#0F0BC7";
        }
      });

      signupButton.classList.remove("gradient");
      signupButton.classList.add("btn-white");
      navbar.style.color = "#fff";
    }

    // Show/hide navbar based on direction
    if (scrollDirection === "up") {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-10rem";
    }

    navbar.style.transition = "all 0.3s ease";
  }

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
