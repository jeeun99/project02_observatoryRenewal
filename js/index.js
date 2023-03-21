const $sliderImg = document.querySelector(".slider-img");
const $slider = document.querySelectorAll(".slider");
const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");
let $sliderDot = document.querySelector(".slider-dot");
let dotIndex = "";
let sliderCount = $slider.length;
let sliderWidth = $slider[0].offsetWidth;

// window 사이즈 변경시 슬라이드의 사이즈 측정
window.addEventListener("resize", () => {
  sliderWidth = $slider[0].offsetWidth;
});

// 슬라이드 하위 dot 슬라이드 개수만큼 추가
$slider.forEach((_, i) => {
  dotIndex += `<span class="dot dot${i + 1}">${i + 1}</span>`;
});
$sliderDot.innerHTML = dotIndex;

// dot 클릭시 해당하는 슬라이드 이동 및 dot 색상 변화
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

// 슬라이드 next, prev 버튼 클릭시 함수
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

// slide loop 적용
setInterval(() => {
  nextMove(1);
  dotActive(1);
}, 5000);

// 날씨 API 적용
// 주간 데이터는 유지시키고 오늘의 날씨만 변경시키고 싶었는데 데이터를 미리 저장하는 방법 외에 다른 방법 찾아야할듯. github에선 json파일로 fetch시 적용이 되지 않는 것 같음.
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
// 이번주 날씨 영역, 날씨정보를 통해 날씨 이미지와 해당 날짜 출력
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

// 오늘의 날씨 영역, 오늘 날짜를 Date()를 통해 받아온 후 날씨 api 속 날짜데이터와 비교해 값이 같을 때의 정보 출력
function createDayHtml(item) {
  const now = new Date();
  let year = now.getFullYear();
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let day = ("0" + now.getDate()).slice(-2);
  let dayString = year + month + day;

  // 강수확률 데이터가 현재 api에는 존재하지 않아 if문을 사용해 날씨 정보에 따라 조건부로 데이터 출력
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

// 인덱스페이지 좌측하단 공지사항과 질문과답변 탭메뉴 구현
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
