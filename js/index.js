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
    $sliderImg.prepend($sliderImg.lastElementChild);
    $sliderImg.style.cssText = `margin-left: -${sliderWidth}px;`;
    setTimeout(() => {
      $sliderImg.style.cssText = `margin-left:0px; transition: 0.5s;`;
    });
  }
}
$prev.addEventListener("click", () => {
  prevMove(1);
  dotActive(sliderCount - 1);
});

const Daycontainer = document.querySelector(".todayWeather");
const Weekcontainer = document.querySelector(".weekWeather");

function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.378&lat=36.349&product=civillight&output=json"
  )
    .then((response) => response.json())
    .then((json) => json.dataseries);
}

function displayItems(items) {
  const Weekcontainer = document.querySelector(".weekWeather");
  Weekcontainer.innerHTML = items.map((item) => createWeekHtml(item)).join("");
  const Daycontainer = document.querySelector(".todayWeather");
  Daycontainer.innerHTML = items.map((item) => createDayHtml(item)).join("");
}

function createWeekHtml(item) {
  let m = item.date.toString().slice(4, 6);
  let d = item.date.toString().slice(6);
  return `
  <div class="inner">
    <img src="./img/${item.weather}.png" data-name="${item.weather}" alt="${item.weather}" />
    <p>${m}/${d}</p>
  </div>
  `;
}

function createDayHtml(item) {
  const now = new Date();
  let year = now.getFullYear();
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let dayString = year + month + day;
  let rainny = "";
  if (item.weather == "lightrain" || item.weather == "rain") {
    rainny = "100%";
  } else if (item.weather == "cloudy") {
    rainny = "50% ~ 70%";
  } else if (item.weather == "mcloudy" || item.weather == "pcloudy") {
    rainny = "10% ~ 40%";
  } else if (item.weather == "clear") {
    rainny = "0%";
  }
  if (item.date == dayString) {
    return `
      <div class="weatherImg">
        <img src="./img/${item.weather}.png" data-name="${item.weather}" alt="${item.weather}" />
      </div>
      <div class="weatherDis">
        <p>강수확률: <span>${rainny}</span></p>
        <p>최고온도: <span>${item.temp2m.max}℃</span></p>
        <p>최저온도: <span>${item.temp2m.min}℃</span></p>
      </div>
        `;
  }
}
loadItems().then((items) => {
  displayItems(items);
});

const $tabTitle = document.querySelectorAll(".tab > li");
const $tabCon = document.querySelectorAll(".tab_con > li");

function show(num) {
  $tabTitle.forEach((a) => {
    a.classList.remove("on");
  });
  $tabTitle[num].classList.add("on");
  $tabCon.forEach((a) => {
    a.classList.remove("on");
  });
  $tabCon[num].classList.add("on");
}

$tabTitle.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    show(i);
  });
});
