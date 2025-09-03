document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("l_btn");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); // 폼 제출 방지 (테스트용)

    // 색상 변경
    loginBtn.style.backgroundColor = "#b5c99a"; // 클릭 시 색
    loginBtn.style.color = "#333"; // 클릭 시 글자색

    // 0.2초 후 원래대로 복원
    setTimeout(() => {
      loginBtn.style.backgroundColor = "#DDE5B6";
      loginBtn.style.color = "#6C584C";
    }, 200);
  });
});
