



const buttons = document.querySelectorAll(".card-buttons button");
console.log("Breakpoint1");
const sections = document.querySelectorAll(".card-section");
console.log("Breakpoint2  ");
const card = document.querySelector(".card");
console.log("Breakpoint3");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  console.log("Breakpoint4");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

console.log("Breakpoint5");

buttons.forEach((btn) => {
  console.log("Button clicked");

  btn.addEventListener("click", handleButtonClick);
  console.log("Breakpoint6");
}
)
console.log("Breakpoint7");;
