document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".pic");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.createElement("img");
  let currentImageIndex = 0;

  images.forEach(function (image, index) {
    image.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightbox.appendChild(lightboxImg);
      lightboxImg.src = this.src;
      lightboxImg.classList.add("lightbox-content");
      currentImageIndex = index;
    });
  });

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const closeBtn = document.querySelector(".close");

  prevBtn.addEventListener("click", function () {
    if (currentImageIndex !== 0) {
      currentImageIndex = (currentImageIndex - 1) % images.length;
      lightboxImg.src = images[currentImageIndex].src;
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentImageIndex !== images.length - 1) {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      lightboxImg.src = images[currentImageIndex].src;
    }
  });

  closeBtn.addEventListener("click", function () {
    closeLightbox();
  });

  // 빈 곳을 클릭하여 라이트박스 닫기
  lightbox.addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.removeChild(lightboxImg);
  }
});
