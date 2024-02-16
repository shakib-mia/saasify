// import { Lenis } from "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  // Lenis initialization and other code here
});

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

document.getElementById("video-close").addEventListener("click", () => {
  document.getElementById("video").src = "";
});

document.getElementById("play").addEventListener("click", () => {
  document.getElementById("video").src =
    "https://www.youtube.com/embed/Rwe5Aw3KPHY?si=-8i_Uer4-b3CBc3o";
});
