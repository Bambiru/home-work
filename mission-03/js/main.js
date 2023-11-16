const btnSelect = document.querySelectorAll(".btn-select");
const optionBtns = document.querySelectorAll(".option-button");
let selectedOption = "";

btnSelect.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    item.classList.toggle("is-active");
  });

  optionBtns.forEach((lang) => {
    lang.addEventListener("click", () => {
      item.textContent = lang.textContent;

      optionBtns.forEach((button) => {
        button.classList.remove("checked");
      });
      lang.classList.add("checked");
      item.classList.remove("is-active");
    });
  });
});
