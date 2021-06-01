var CoverBlock = document.querySelector(".CoverBlock");
if (CoverBlock) {
  var storiesLogo = document.querySelector(".CoverBlock_storiesLogo");
  var logo = document.querySelector(".MenuBar_logoImg");
  var blockMore = document.querySelector(".CoverBlock_more");
  // SCROOL EVENT PAGE
  window.addEventListener("scroll", () => {
    let opacity = 1 - scrollY / 260;
    // Logo cover block
    storiesLogo.style.transform = "translateY(" + -scrollY + "px" + ")";
    storiesLogo.style.opacity = opacity;
    //  more block arrow
    blockMore.style.transform =
      "matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0," + -scrollY + ", 0, 1)";
    blockMore.style.opacity = opacity * 1.5;
    //   logo toogle
    if (scrollY >= 100) {
      logo.style.transform = "translateY(0)";
    } else {
      logo.style.transform = "translateY(100px)";
    }
  });
}

//  FolderBlock event
const FolderBlockContainer = document.querySelectorAll(
  ".FolderPreviewBlock.hide-on-mobile-tablet .FolderPreviewBlock_previewContainer"
);
console.log(FolderBlockContainer);
const FolderPreviewBlock_Img = document.querySelectorAll(
  ".FolderPreviewBlock_Img"
);
const FolderPreviewBlock_previewBackground = document.querySelectorAll(
  ".FolderPreviewBlock_previewBackground"
);
for (let i = 0; i < FolderBlockContainer.length; ++i) {
  FolderBlockContainer[i].onmouseenter = function () {
    FolderPreviewBlock_Img[i].style.transform = "scale(1.05,1.05)";
    FolderPreviewBlock_previewBackground[i].style.transform =
      "matrix(1.05, 0, 0, 1.05, 0, 0)";
  };
}
for (let i = 0; i < FolderBlockContainer.length; ++i) {
  FolderBlockContainer[i].onmouseleave = function () {
    FolderPreviewBlock_Img[i].style.transform = "";
    FolderPreviewBlock_previewBackground[i].style.transform = "";
  };
}


// slideshow block event
const SlideshowPreviewBlock = document.querySelector(".SlideshowPreviewBlock");
if (SlideshowPreviewBlock) {
  var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  function dots(){
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot, i) {
    dot.onclick = function () {
      currentDot = document.querySelector(".dot.active");
      currentDot.classList.remove("active");
      currentSlide(i + 1);
      dot.classList.add("active");
    };
  });
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slideshow_slide");
    dots()
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
}


// Toogle Sidebar

  // Main menu
function toogleMenu() {
  let x = document.getElementById("mainmenu");
  x.classList.toggle('show')
  if(x.className ==='MainMenu show'){
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }else{
    document.body.style.position = '';
    document.body.style.top = '';
  }
}
  // Plus menu
function PlusMenu(){
  let x = document.querySelector(".PlusMenu")
  x.classList.toggle('show')
  PlusIcon = document.querySelector('.MenuBar_PlusMenuButton i')
  if (x.className === 'PlusMenu show'){
    PlusIcon.style.transform = 'rotate(45deg)'
  }else{
    PlusIcon.style.transform = ''
  }
}

// Main menu event
const MainMenu_primaryMenuLink = document.querySelectorAll(
  ".MainMenu_primaryMenuLink"
);
const MainMenu_primaryMenuLinkActive = document.querySelector(
  ".MainMenu_primaryMenuLink.active"
);
const MainMenu_imageMenuLink = document.querySelectorAll(
  ".MainMenu_imageMenuLink"
);
Array.from(MainMenu_primaryMenuLink);
Array.from(MainMenu_imageMenuLink);
MainMenu_primaryMenuLink.forEach((link, i) => {
  link.onmouseenter = function () {
    MainMenu_imageMenuLink.forEach((image) => {
      image.style.transform =
        "translate(0%," + -i * 100 + "%" + ") translate3d(0px, 0px, 0px)";
    });
  };
});


// Split block
var ListHeaderBlock = document.querySelector(".ListHeaderBlock");
var ListHeaderBlock_watermark = document.querySelector(
  ".ListHeaderBlock_watermark"
);

var SplittedPreviewBlock_watermark = document.querySelectorAll(
  ".SplittedPreviewBlock_watermark"
);
let SplittedPreviewBlock = document.querySelectorAll(".SplittedPreviewBlock");
let SplittedPreviewBlockRow = document.querySelectorAll(
  ".SplittedPreviewBlock-interview.Row"
);
let SplittedPreviewBlock_watermarkRow = document.querySelectorAll(
  ".SplittedPreviewBlock-interview.Row .SplittedPreviewBlock_watermark"
);
window.addEventListener("scroll", () => {
  let opacity = 1 - scrollY / 250;
  ListHeaderBlock.style.opacity = opacity;
  ListHeaderBlock_watermark.style.transform =
    "translate3d(" + -scrollY + "px" + ",-50%,0)";

  for (let i = 0; i < SplittedPreviewBlock.length; ++i) {
    if (scrollY >= SplittedPreviewBlock[i].offsetTop) {
      SplittedPreviewBlock_watermark[i].style.transform =
        "translate3d(" +
        (-scrollY + SplittedPreviewBlock[i].offsetTop) * 0.2 +
        "px" +
        ",0,0)";
    } else {
      SplittedPreviewBlock_watermark[i].style.transform =
        "translate3d(" +
        (-scrollY + SplittedPreviewBlock[i].offsetTop) * 0.2 +
        "px" +
        ",0,0)";
    }
  }
  for (let i = 0; i < SplittedPreviewBlockRow.length; ++i) {
    if (scrollY >= SplittedPreviewBlockRow[i].offsetTop - 150) {
      SplittedPreviewBlock_watermarkRow[i].style.transform =
        "translate3d(" +
        (-1650 + (scrollY - SplittedPreviewBlockRow[i].offsetTop)) * 0.3 +
        "px" +
        ",0,0)";
    } else {
      SplittedPreviewBlock_watermarkRow[i].style.transform =
        "translate3d(" +
        (-1650 + (scrollY - SplittedPreviewBlockRow[i].offsetTop)) * 0.3 +
        "px" +
        ",0,0)";
    }
  }
});
