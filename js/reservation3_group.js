const teamName = document.querySelector("#team_name");
const teamNum = document.querySelector("#team_num");
const teamAge = document.querySelector("#team_age");

$btn_resCom.addEventListener("click", (e) => {
  let errors = false;

  // 단체명
  if (teamName.value.trim() == "") {
    document.querySelector("#team_name-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    document.querySelector("#team_name-error").textContent = "";
  }

  // 단체인원수
  // 값이 비었을 경우 필수입력사항입니다. 값이 있을경우 정규식에 맞는지 판별후 오류메시지 출력
  let NumPattern = /^[0-9]+$/;
  if (teamNum.value.trim() == "") {
    document.querySelector("#team_num-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    if (NumPattern.test(teamNum.value)) {
      document.querySelector("#team_num-error").textContent = "";
    } else {
      document.querySelector("#team_num-error").textContent =
        "숫자만 입력해주세요.";
      errors = true;
    }
  }

  // 단체 평균연령
  // 값이 비었을 경우 필수입력사항입니다. 값이 있을경우 정규식에 맞는지 판별후 오류메시지 출력
  if (teamAge.value.trim() == "") {
    document.querySelector("#team_age-error").textContent =
      "필수입력사항입니다.";
    errors = true;
  } else {
    if (NumPattern.test(teamAge.value)) {
      document.querySelector("#team_age-error").textContent = "";
    } else {
      document.querySelector("#team_age-error").textContent =
        "숫자만 입력해주세요.";
      errors = true;
    }
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
