document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const xRatio = mouseX / width;
  const yRatio = mouseY / height;

  const gradient = `linear-gradient(45deg, rgba(${xRatio * 255}, ${
    yRatio * 255
  }, 255, 0.5), rgba(255, 0, ${xRatio * 255}, 0.5))`;
  document.body.style.background = gradient;
});
