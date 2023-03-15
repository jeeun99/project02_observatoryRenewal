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

const $perorteam = document.querySelectorAll('input[name="perOrteam"]');
const $per = document.querySelector(".person");
const $team = document.querySelector(".team");

const $per_btn = document.querySelector(".per_btn");
const $team_btn = document.querySelector(".team_btn");

// console.log($submitBtn);

$perorteam.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    $per.classList.remove("on");
    $per_btn.classList.remove("on");
    $team.classList.remove("on");
    $team_btn.classList.remove("on");
    if (i == 0) {
      $per.classList.add("on");
      $per_btn.classList.add("on");
    } else if (i == 1) {
      $team.classList.add("on");
      $team_btn.classList.add("on");
    }
  });
});
