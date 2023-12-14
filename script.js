const control = document.querySelector(".control");
const rotator = document.querySelector(".rotator");
let direction = "right";

control.addEventListener("click", () => {
  console.log("click", direction);
  rotator.classList.remove(direction);
  direction = direction === "right" ? "left" : "right";
  rotator.classList.add(direction);
});
