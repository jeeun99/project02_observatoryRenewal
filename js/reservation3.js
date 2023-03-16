const checkBox = document.querySelector("#info_check");
const $btn_resCom = document.querySelector("input[type='submit']");
const $modal = document.querySelector(".modal");
const $btn_modal = document.querySelector(".modal_con > button");

// 예약신청 버튼 클릭했을 때,
// 상단의 체크박스가 미체크일경우 주의사항 출력하고 체크됐을 경우에는 예약확인정보가 출력되는 모달창 띄우기
$btn_resCom.addEventListener("click", (e) => {
  let errors = false;
  const isChecked = checkBox.checked;
  if (!isChecked) {
    // 미체크시
    document.querySelector("#checkplz").textContent =
      "정보 수집 동의시 체크 부탁드립니다.";
    errors = true;
  } else {
    document.querySelector("#checkplz").textContent = "";
    errors = false;
  }
  if (errors) {
    e.preventDefault();
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
