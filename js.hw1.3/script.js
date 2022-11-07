const img1 =
  "https://fbc.ua/wp-content/uploads/2021/07/ledenaya_antarktida.jpg";
const img2 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fryxellsee_Opt.jpg/1280px-Fryxellsee_Opt.jpg";
const img3 =
  "https://publish.com.ua/images/2020/11/29/12063_odinokiy-pingvin_large.jpg";

var currentImgName = "Gate";

function changeImg(imgName) {
  const mainImgE1 = document.getElementById("main-img");

  if (imgName === "Gate") {
    mainImgE1.src = img1;
  }

  if (imgName === "Mountain") {
    mainImgE1.src = img2;
  }

  if (imgName === "Penguin") {
    mainImgE1.src = img3;
  }

  currentImgName = imgName;
  changeActiveClass();
}

function goNext() {
  if (currentImgName === "Gate") {
    changeImg("Mountain");
  } else if (currentImgName === "Mountain") {
    changeImg("Penguin");
  } else if (currentImgName === "Penguin") {
    changeImg("Gate");
  }
}

function goPrev() {
  if (currentImgName === "Gate") {
    changeImg("Penguin");
  } else if (currentImgName === "Penguin") {
    changeImg("Mountain");
  } else if (currentImgName === "Mountain") {
    changeImg("Gate");
  }
}

function changeActiveClass() {
  const dotEl1 = document.getElementById("dot1");
  const dotEl2 = document.getElementById("dot2");
  const dotEl3 = document.getElementById("dot3");

  dotEl1.classList.remove("active");
  dotEl2.classList.remove("active");
  dotEl3.classList.remove("active");

  if (currentImgName === "Gate") {
    dotEl1.classList.add("active");
  }

  if (currentImgName === "Mountain") {
    dotEl2.classList.add('active');
  }

  if (currentImgName === "Penguin") {
    dotEl3.classList.add('active');
  }
}
