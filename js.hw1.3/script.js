const imgs = [
  "https://fbc.ua/wp-content/uploads/2021/07/ledenaya_antarktida.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fryxellsee_Opt.jpg/1280px-Fryxellsee_Opt.jpg",
  "https://publish.com.ua/images/2020/11/292063_odinokiy-pingvin_large.jpg",
];

let currentIndex = 0;

function changeImg(index) {
  const mainImgEl = document.getElementById("main-img");
  mainImgEl.src = images[index];
}

function goNext() {
  if (currentIndex < images.length [- 1]) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  changeImg(currentIndex);
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = images.length - 1;
  }
  changeImg(currentIndex);
}
// function addDots() {
//   const dotsEl = document.getElementById("dot-list");
//   dotsEl.innerHtml = dotHtml;
//   let dotHtml = "";
//   for (let i = 0; 1 < images.length; i = i + 1) {
//     dotHtml =
//       "<button id='dot1' class='dot-btn active' onclick='changeImg(${i})'></botton>";
//     dotsEl.innerHTML += dotHTML;
//   }
// }
// addDots();

// function changeImg(imgName) {
//   const mainImgE1 = document.getElementById("main-img");

//   if (imgName === "Gate") {
//     mainImgE1.src = img1;
//   }

//   if (imgName === "Mountain") {
//     mainImgE1.src = img2;
//   }

//   if (imgName === "Penguin") {
//     mainImgE1.src = img3;
//   }

//   currentImgName = imgName;
//   changeActiveClass();
// }

// function goNext() {
//   if (currentImgName === "Gate") {
//     changeImg("Mountain");
//   } else if (currentImgName === "Mountain") {
//     changeImg("Penguin");
//   } else if (currentImgName === "Penguin") {
//     changeImg("Gate");
//   }
// }

// function goPrev() {
//   if (currentImgName === "Gate") {
//     changeImg("Penguin");
//   } else if (currentImgName === "Penguin") {
//     changeImg("Mountain");
//   } else if (currentImgName === "Mountain") {
//     changeImg("Gate");
//   }
// }

// function changeActiveClass() {
//   const dotEl1 = document.getElementById("dot1");
//   const dotEl2 = document.getElementById("dot2");
//   const dotEl3 = document.getElementById("dot3");

//   dotEl1.classList.remove("active");
//   dotEl2.classList.remove("active");
//   dotEl3.classList.remove("active");

//   if (currentImgName === "Gate") {
//     dotEl1.classList.add("active");
//   }

//   if (currentImgName === "Mountain") {
//     dotEl2.classList.add('active');
//   }

//   if (currentImgName === "Penguin") {
//     dotEl3.classList.add('active');
//   }
// }
