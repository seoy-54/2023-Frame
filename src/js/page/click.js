document.getElementById("upload-button").addEventListener("click", function () {
  location.reload();
});

// 사진
function getImageFiles(e) {
  const uploadFiles = [];
  const files = e.currentTarget.files;
  const imagePreview = document.querySelector(".image-preview");

  if ([...files].length > 5) {
    alert("최대 5개까지 업로드 가능합니다.");
    return;
  }

  // 파일 타입 및 갯수 검사
  [...files].forEach((file) => {
    if (!file.type.match("image/.*")) {
      alert("이미지 파일이 아닙니다.");
      return;
    }

    uploadFiles.push(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = createElement(e, file);
      imagePreview.appendChild(preview);
    };
    reader.readAsDataURL(file);
  });
}

function createElement(e, file) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", e.target.result);
  img.setAttribute("data-file", file.name);
  li.appendChild(img);

  return li;
}

const fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", getImageFiles);
