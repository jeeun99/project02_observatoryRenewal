const checkBox = document.querySelector("#info_check");
const $btn_resCom = document.querySelector("input[type='submit']");
const $modal = document.querySelector(".modal");
const $btn_modal = document.querySelector(".modal_con > button");
const username = document.querySelector("#nm");
const phoneNum = document.querySelector("#numb");
const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const teamName = document.querySelector("#team_name");
const teamNum = document.querySelector("#team_num");
const teamAge = document.querySelector("#team_age");

$btn_resCom.addEventListener("click", (e) => {
  let errors = false;
  const isChecked = checkBox.checked;
  // 예약신청 버튼 클릭했을 때,
  // 상단의 체크박스가 미체크일경우 주의사항 출력하고 체크됐을 경우에는 예약확인정보가 출력되는 모달창 띄우기
  if (!isChecked) {
    // 미체크시
    document.querySelector("#checkplz").textContent =
      "정보 수집 동의시 체크 부탁드립니다.";
    errors = true;
  } else {
    document.querySelector("#checkplz").textContent = "";
    errors = false;
  }

  if (username.value.trim() == "") {
    document.querySelector("#username-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#username-error").textContent = "";
  }
  // 전화번호 형식 검사 정규화패턴
  let numbPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
  if (phoneNum.value.trim() == "") {
    document.querySelector("#numb-error").textContent = "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#numb-error").textContent = "";
  }
  if (numbPattern.test(phoneNum.value)) {
    document.querySelector("#numb-error").textContent = "";
  } else {
    document.querySelector("#numb-error").textContent =
      "양식에 맞지 않습니다. 다시 입력해주세요.";
    errors = true;
  }

  if (email.value.trim() == "") {
    document.querySelector("#email-error").textContent = "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#email-error").textContent = "";
  }

  if (pw.value.trim() == "") {
    document.querySelector("#pw-error").textContent = "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#pw-error").textContent = "";
  }

  if (teamName.value.trim() == "") {
    document.querySelector("#team_name-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#team_name-error").textContent = "";
  }
  let NumPattern = /^[0-9]+$/;
  if (teamNum.value.trim() == "") {
    document.querySelector("#team_num-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#team_num-error").textContent = "";
  }
  if (NumPattern.test(teamNum.value)) {
    document.querySelector("#team_num-error").textContent = "";
  } else {
    document.querySelector("#team_num-error").textContent =
      "숫자만 입력해주세요.";
    errors = true;
  }

  if (teamAge.value.trim() == "") {
    document.querySelector("#team_age-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#team_age-error").textContent = "";
  }
  if (NumPattern.test(teamAge.value)) {
    document.querySelector("#team_age-error").textContent = "";
  } else {
    document.querySelector("#team_age-error").textContent =
      "숫자만 입력해주세요.";
    errors = true;
  }

  if (errors) {
    e.preventDefault();
    alert("미입력 또는 미체크 사항이 있는지 확인해주세요.");
  } else {
    $modal.classList.add("on");
  }
});

// 모달창 속 예약 완료 버튼 클릭시 예약 완료 안내 페이지로 이동
$btn_modal.addEventListener("click", () => {
  function newPage() {
    window.location.href = "./resComplete.html";
  }
  newPage();
});

// 이전으로 돌아가기 버튼
function back() {
  history.back();
}
