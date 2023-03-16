// 상단의 라디오버튼 개인예약, 단체예약 클릭을 통한 하위 프로그램 정보 변경
const $perorteam = document.querySelectorAll('input[name="perOrteam"]');
const $per = document.querySelector(".person");
const $team = document.querySelector(".team");

const $per_btn = document.querySelector(".per_btn");
const $team_btn = document.querySelector(".team_btn");

// console.log($submitBtn);

// 두가지 중 하나를 선택했을 때를 인덱스 번호가 0 또는 1일때로 나누어 출력
// 좀 더 간략하게 코드 쓰는 방법 찾아볼 것.
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

// 이전으로 돌아가기 버튼에 필요한 back 함수
function back() {
  history.back();
}
