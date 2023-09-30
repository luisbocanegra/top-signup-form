const passwControl = document.querySelector("#password");
const passwConfirmControl = document.querySelector("#password_confirm");

const passwMismatchMsg = document.querySelector(".password-error");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
  if (passwControl.value !== passwConfirmControl.value) {
    e.preventDefault();
    passwMismatchMsg.classList.add('visible');
    passwControl.classList.add("invalid-control")
    passwConfirmControl.classList.add("invalid-control")
  }
})

function switchTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "" : "dark";
  root.className = newTheme;
}
document.querySelector(".dark-mode-toggle").addEventListener("click", switchTheme)
