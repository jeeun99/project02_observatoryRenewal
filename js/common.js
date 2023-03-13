const $hd = document.querySelector(".hd");
const $ft = document.querySelector(".ft");

const HD = `
<div class="mw">
<h1>
  <a href="./index.html"><img src="./img/logo.svg" alt="logo" /></a>
</h1>
<nav class="gnb_con">
  <ul class="gnb">
    <li>
      <a href="#none">천문대소개</a>
      <ul class="sub">
        <li><a href="#none">인사말</a></li>
        <li><a href="#none">현황 및 조직도</a></li>
        <li><a href="#none">시설안내</a></li>
        <li><a href="#none">홍보자료</a></li>
      </ul>
    </li>
    <li>
      <a href="#none">이용안내</a>
      <ul class="sub">
        <li><a href="#none">관람안내</a></li>
        <li><a href="#none">관측대상</a></li>
        <li><a href="#none">오시는길</a></li>
      </ul>
    </li>
    <li>
      <a href="#none">예약안내</a>
      <ul class="sub">
        <li><a href="./reservation1.html">관람예약</a></li>
        <li><a href="#none">특별프로그램</a></li>
        <li><a href="#none">봉사활동</a></li>
      </ul>
    </li>
    <li>
      <a href="#none">천문대소식</a>
      <ul class="sub">
        <li><a href="#none">행사사진</a></li>
        <li><a href="#none">천문정보</a></li>
        <li><a href="#none">아스트로갤러리</a></li>
      </ul>
    </li>
    <li>
      <a href="#none">커뮤니티</a>
      <ul class="sub">
        <li><a href="#none">공지사항</a></li>
        <li><a href="#none">방문후기</a></li>
        <li><a href="#none">질문과답변</a></li>
        <li><a href="#none">자주하는질문</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div class="personal">
  <a href="#none">로그인</a>
  <a href="#none">회원가입</a>
</div>
<div class="ham">
  <i class="fa-solid fa-bars"></i>
  <i class="fa-solid fa-xmark"></i>
</div>
</div>
`;
const FT = `
<div class="mw">
<div class="ftlogo">
  <img src="./img/logo.svg" alt="logo" />
</div>
<div class="ftwrite">
  <span>(34128) 대전광역시 유성구 과학로 213-48 (신성동 7-13)</span>
  <span>TEL. 042-863-8762, 8763</span>
  <span>FAX. 042-863-8761</span>
  <p>Copyright © 2017 Daejeon Observatory. All rights reserved</p>
</div>
<div class="goto">
  <p>바로가기</p>
  <div class="insite">
    <select name="site" id="site-select">
      <option value="기관사이트바로가기" selected="selected">
        기관사이트 바로가기
      </option>
      <option class="opts" value="대전광역시">대전광역시</option>
      <option class="opts" value="한국천문연구원">
        한국천문연구원
      </option>
      <option class="opts" value="국립중앙과학관">
        국립중앙과학관
      </option>
      <option class="opts" value="(사)한국천문우주과학관협회">
        (사)한국천문우주과학관협회
      </option>
      <option class="opts" value="대덕연구개발특구">
        대덕연구개발특구
      </option>
    </select>
  </div>
  <div class="observatory">
    <select name="observatory" id="obs-select">
      <option value="천문대바로가기" selected="selected">
        천문대 바로가기
      </option>
      <option class="opts" value="별마로천문대">별마로천문대</option>
      <option class="opts" value="김해곡성섬진강천문대">
        김해곡성섬진강천문대
      </option>
      <option class="opts" value="곡성섬진강천문대">
        곡성섬진강천문대
      </option>
      <option class="opts" value="국토정중앙천문대">
        국토정중앙천문대
      </option>
      <option class="opts" value="충주고구려천문과학관">
        충주고구려천문과학관
      </option>
      <option class="opts" value="소백산천문대">소백산천문대</option>

      <option class="opts" value="보현산천문대">보현산천문대</option>
      <option class="opts" value="칠갑산천문대">칠갑산천문대</option>
      <option class="opts" value="서귀포천문과학문화관">
        서귀포천문과학문화관
      </option>
      <option class="opts" value="예천천문우주센터">
        예천천문우주센터
      </option>
    </select>
  </div>
</div>
</div>
`;
$hd.innerHTML = HD;
$ft.innerHTML = FT;

const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", () => {
  $ham.classList.toggle("on");
  $gnb.classList.toggle("on");
});

const $gnbList = document.querySelectorAll(".gnb > li > a");
const $sub = document.querySelector(".gnb > li > a + .sub");

$gnbList.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    let eTarget = e.target;

    if (eTarget.classList.contains("on") == false) {
      $gnbList.forEach((a) => {
        a.classList.remove("on");
      });
      eTarget.classList.add("on");
    } else {
      eTarget.classList.remove("on");
    }
  });
});
