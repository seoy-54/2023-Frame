document.addEventListener("DOMContentLoaded", function () {
  const galleryImgs = document.querySelectorAll(".gallery img.pic");

  galleryImgs.forEach(function (galleryImg) {
    galleryImg.addEventListener("mouseenter", function () {
      setTimeout(function () {
        galleryImg.classList.add("animate"); // 'animate' 클래스를 추가하여 애니메이션 실행
      }, 1000); // 1초 후에 애니메이션 실행
    });
  });
});
