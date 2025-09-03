document.addEventListener('DOMContentLoaded', () => {
  const bookNow = document.querySelector('.book_now');
  const totalSlides = document.querySelectorAll('.book_now_page').length;
  let currentSlide = 0;

  function goToSlide(index) {
    currentSlide = index % totalSlides;
    bookNow.style.transform = `translateX(-${currentSlide * 50}%)`;
  }

  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 4000);

  function updateTime() {
    const dateElement = document.querySelector('.date');
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? '오후' : '오전';
    if (hours > 12) hours -= 12;
    if (hours === 0) hours = 12;
    const timeString = `⏲${year}년 ${month}월 ${day}일 ${ampm} ${hours}:${minutes}`;
    dateElement.textContent = timeString;
  }

  updateTime();
  setInterval(updateTime, 60000);

  const nextBtn = document.getElementById('midnext');
  const prevBtn = document.getElementById('midprev');

  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  });
});
