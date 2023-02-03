function microcityButton() {
  const button = document.querySelector(".js-microcity-button");

  button.addEventListener("click", function () {
    this.classList.toggle("active");

    this.parentElement.querySelectorAll(".js-microcity-item").forEach((e) => {
      e.classList.toggle("d-none");
    });

    if (this.classList.contains("active")) {
      this.innerText = "Скрыть";
    } else {
      this.innerText = "Показать ещё";
    }
  });
}

export default microcityButton();
