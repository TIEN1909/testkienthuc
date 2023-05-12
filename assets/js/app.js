// -------------------------
const toggle = document.querySelector(".heder__icon-close ");
const menu = document.querySelector(".header__list");
const activeClass = "is-show";
const headerIcon = "header__icon";
toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".heder__icon-close")) {
    menu.classList.remove(activeClass);
  }
});
$(document).ready(function () {
  $(".hero__conatiner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="bi bi-chevron-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
  $(".hero__conatiner").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var counter = $(this).closest(".hero").find(".hero__slider--counter");
      counter.text(currentSlide + 1 + "/" + slick.slideCount);
    }
  );
  const slider = $(".business__image--slider");

  $("#button1").click(function () {
    slider.slick("slickGoTo", -1);
    $(this).toggleClass("isActive");
    $("#button2, #button3").removeClass("isActive");
  });

  $("#button2").click(function () {
    slider.slick("slickGoTo", 0);
    $(this).toggleClass("isActive");
    $("#button1, #button3").removeClass("isActive");
  });

  $("#button3").click(function () {
    slider.slick("slickGoTo", 1);
    $(this).toggleClass("isActive");
    $("#button1, #button2").removeClass("isActive");
  });
  $(".business__image--slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="bi bi-chevron-right"></i></button>`,
    dots: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
  $(".partner__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="bi bi-chevron-right"></i></button>`,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: false,
          arrows: true,
        },
      },
    ],
  });
  $(".news__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="bi bi-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="bi bi-chevron-right"></i></button>`,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });

  $(".slider-project .slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-project .slider-nav",
  });
  $(".slider-project .slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-project .slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    rows: 2,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});
