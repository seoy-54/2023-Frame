document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".pic");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.createElement("img");
  let currentImageId = null;
  let currentImageIndex = 0;

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightbox.appendChild(lightboxImg);
      lightboxImg.src = this.src;
      lightboxImg.classList.add("lightbox-content");
      currentImageId = this.dataset.imageId;

      const likeBtn = document.getElementById("like");
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("active");

        // 현재 이미지 식별자에 해당하는 이미지에만 하트 표시
        const targetImage = document.querySelector(
          `.pic[data-image-id="${currentImageId}"]`
        );

        if (targetImage) {
          const likeSpan = targetImage.querySelector(".like");
          likeSpan.classList.toggle("active");
        }
      });
    });
  });

  // 라이트박스 닫기
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    closeLightbox();
  });

  // 키보드 이벤트
  document.addEventListener("keydown", function (event) {
    if (lightbox.style.display === "flex") {
      if (event.key === "ArrowLeft") {
        navigateImage(-1);
      } else if (event.key === "ArrowRight") {
        navigateImage(1);
      } else if (event.key === "Escape") {
        closeLightbox();
      }
    }
  });

  // 이미지 탐색 함수
  function navigateImage(offset) {
    currentImageIndex =
      (currentImageIndex + offset + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex].src;
  }

  // 라이트박스 닫는 함수
  function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.removeChild(lightboxImg);
  }
});
