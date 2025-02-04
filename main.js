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
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    if (scrollDirection === "up") {
      if (window.scrollY > document.querySelector("header").clientHeight) {
        document.getElementById("navbar-container").style.background = "#fff";
        document.getElementById("navbar-container").style.boxShadow =
          "0 0 10px #ccc";
        document.getElementById("navbar-container").style.color = "black";
        document.querySelector("#signup-button").classList.add("gradient");
        document.querySelector("#signup-button").classList.remove("btn-white");
      } else {
        document.getElementById("navbar-container").style.background = "#fff0";
        document.getElementById("navbar-container").style.boxShadow = "none";

        document.getElementById("navbar-container").style.color = "white";
        document.querySelector("#signup-button").classList.remove("gradient");
        document.querySelector("#signup-button").classList.add("btn-white");
      }
      document.getElementById("navbar-container").style.top = "0";
      document.getElementById("navbar-container").style.top = "0";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    } else {
      document.getElementById("navbar-container").style.top = "-10rem";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
