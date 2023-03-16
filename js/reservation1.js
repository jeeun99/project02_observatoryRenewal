// 예약진행하기 버튼 클릭했을 때,
// 상단의 체크박스가 미체크일경우 주의사항 출력하고 체크됐을 경우에는 다음페이지로 이동하는 newPage()함수 실행
const checkBox = document.querySelector("#cau_check");
const $btn_resGo = document.querySelector("input[type='submit']");

$btn_resGo.addEventListener("click", (e) => {
  let errors = false;
  const isChecked = checkBox.checked;
  if (!isChecked) {
    // 미체크시
    document.querySelector("#checkcplz").textContent =
      "주의사항 확인시 체크 부탁드립니다.";
    errors = true;
  } else {
    document.querySelector("#checkcplz").textContent = "";
    errors = false;
  }
  if (errors) {
    e.preventDefault();
  } else {
    function newPage() {
      window.location.href = "./reservation2.html";
    }
    newPage();
  }
});
