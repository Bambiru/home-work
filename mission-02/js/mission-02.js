const statusIcon = document.querySelector("#status-icon");
const userPassword = document.querySelector("#userPassword");

console.log(userPassword.type);

statusIcon.addEventListener("click", () => {
  if (statusIcon.className === "hidden") {
    statusIcon.className = "visible";
    userPassword.type = "text";
  } else if (statusIcon.className === "visible") {
    statusIcon.className = "hidden";
    userPassword.type = "password";
  }
});
