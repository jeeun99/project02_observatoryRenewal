const $sliderImg = document.querySelector(".slider-img");
const $slider = document.querySelectorAll(".slider");
const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");
let $sliderDot = document.querySelector(".slider-dot");
let dotIndex = "";
let sliderCount = $slider.length;
let sliderWidth = $slider[0].offsetWidth;

window.addEventListener("resize", () => {
  sliderWidth = $slider[0].offsetWidth;
});

$slider.forEach((_, i) => {
  dotIndex += `<span class="dot dot${i + 1}">${i + 1}</span>`;
});
$sliderDot.innerHTML = dotIndex;

let $dot = document.querySelectorAll(".slider-dot > span");
function dotActive(i) {
  for (let b = 0; b < i; b++) {
    $sliderDot.appendChild($dot[0]);
    $dot = document.querySelectorAll(".slider-dot > span");
  }
}
function nextMove2(i) {
  for (let b = 0; b < i; b++) {
    $sliderImg.appendChild($sliderImg.firstElementChild);
    $sliderImg.style.cssText = `margin-left: 0px;`;
  }
}

$dot.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const nodes = [...e.target.parentElement.children];
    const index = nodes.indexOf(e.target);
    dotActive(index);
    nextMove2(index);
  });
});

function nextMove(i) {
  for (let a = 0; a < i; a++) {
    $sliderImg.style.cssText = `margin-left:-${sliderWidth}px; transition: 0.5s;`;
    setTimeout(() => {
      $sliderImg.appendChild($sliderImg.firstElementChild);
      $sliderImg.style.cssText = `margin-left:0`;
    }, 500);
  }
}
$next.addEventListener("click", () => {
  nextMove(1);
  dotActive(1);
});
function prevMove(i) {
  for (let a = 0; a < i; a++) {
    $sliderImg.prepend($sliderImg.firstElementChild);
    $sliderImg.style.cssText = `margin-left: ${sliderWidth}px;`;
    setTimeout(() => {
      $sliderImg.style.cssText = `margin-left:0px; transition: 0.5s;`;
    });
  }
}
$prev.addEventListener("click", () => {
  prevMove(1);
  dotActive(sliderCount - 1);
});
