const imgs = [
  "https://fbc.ua/wp-content/uploads/2021/07/ledenaya_antarktida.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fryxellsee_Opt.jpg/1280px-Fryxellsee_Opt.jpg",
  "https://rare-gallery.com/uploads/posts/1152341-birds-penguins-animals-snow-winter-ice-Arctic-Penguin-bird-fauna-flightless-bird-vertebrate.jpg",
  "https://i.natgeofe.com/n/c4f2589c-883d-40a4-bf64-239ac0ccc210/01-polar-animals-nationalgeographic_1528122_16x9.jpg?w=1200",
  "https://i.natgeofe.com/n/d863d4f1-5e8d-4a8c-84c1-ab443c475a19/01_arctic_ocean_kxwd6b_16x9.jpg?w=1200",
  "https://geographydirections.files.wordpress.com/2020/10/iceberg-antarctica-polar-blue-53389.jpeg?w=1880&h=1200&crop=1"
];

let curIndex = 0;

function changeImg(index) {
  const mainImgEl = document.getElementById("main-img");
  mainImgEl.src = imgs[index];
}

function goNext() {
  if (curIndex < imgs.length - 1) {
    curIndex = curIndex + 1;
  } else {
    curIndex = 0;
  }
  changeImg(curIndex);
}

function goPrev() {
  if (curIndex > 0) {
    curIndex = curIndex - 1;
  } else {
    curIndex = imgs.length - 1;
  }
  changeImg(curIndex);
}

function allDots(){
  const dotsEl = document.getElementById('dots');

  let dotHtml = '';
  for (let i = 0; i < imgs.lendth; i = i + 1){
    dotHtml = '<button class=dot-btn onclick=changeImg(${i})></button>';
    dotsEl.innerHTML += dotHtml;
  }
}