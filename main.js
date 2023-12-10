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

alert(window.innerWidth);
