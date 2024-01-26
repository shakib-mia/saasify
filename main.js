// import { Lenis } from "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
AOS.init();

const lenis = new Lenis({
  duration: 1,
});

lenis.on("scroll", (e) => {
  //   console.log(e);
});

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
