const $chooseItem = document.querySelectorAll(".number-item");

$chooseItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const eTarget = e.target.parentNode;
    if (eTarget.classList.contains("on") == false) {
      $chooseItem.forEach((a) => {
        a.classList.remove("on");
      });
      eTarget.classList.toggle("on");
    } else {
      eTarget.classList.remove("on");
    }
  });
});
