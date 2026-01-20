let count = 0;
const target = 54;
const level = document.querySelector(".level");

const timer = setInterval(() => {
  count++;
  level.innerText = count;
  if (count >= target) clearInterval(timer);
}, 20);
