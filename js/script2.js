document.addEventListener("DOMContentLoaded", function () {
    const payBtn = document.getElementById("payBtn");
    const popup = document.querySelector(".popup");
    const plans = document.querySelectorAll(".pay_wrap");
    const selectBtns = document.querySelectorAll(".pay_wrap a");

    // 요금제 선택 버튼 클릭 이벤트
    selectBtns.forEach((btn, index) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // a태그 기본 이동 막기

            // 모든 요금제에서 선택 표시 제거
            plans.forEach(plan => plan.classList.remove("selected"));

            // 클릭한 요금제에 선택 표시 추가
            plans[index].classList.add("selected");
        });
    });

    // 결제하기 버튼 클릭 이벤트
    payBtn.addEventListener("click", function () {
        popup.classList.remove("hidden");

        payBtn.textContent = "결제완료 🎉";
        payBtn.style.backgroundColor = "#b5c99a";

        setTimeout(() => {
            popup.classList.add("hidden");
        }, 2000);

        if (navigator.vibrate) navigator.vibrate(100);
    });
});