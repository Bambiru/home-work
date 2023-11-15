const btnSelect = document.querySelector(".btn-select");
const optionBtns = document.querySelectorAll(".option-button");
let selectedOption = "";

btnSelect.addEventListener("click", () => {
  btnSelect.classList.toggle("is-active");
});

optionBtns.forEach((item) => {
  item.addEventListener("click", () => {
    btnSelect.textContent = item.textContent;

    optionBtns.forEach((button) => {
      button.classList.remove("checked");
    });
    item.classList.add("checked");
    btnSelect.classList.remove("is-active");
  });
});
