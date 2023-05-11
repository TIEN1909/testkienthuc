const toggle = document.querySelector(".header__icon ");
const menu = document.querySelector(".header__list");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header__icon")) {
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
    dots: false,
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
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
  $(".hero__conatiner").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var counter = $(this).closest(".hero").find(".hero__slider--counter");
      counter.text(currentSlide + 1 + "/" + slick.slideCount);
    }
  );
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
    // autoplay: true,
    // autoplaySpeed: 1000,
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
    // autoplay: true,
    // autoplaySpeed: 1000,
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
          slidesToShow: 3,
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
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
  // Khởi tạo slider-for và slider-nav
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
  });

  // Bắt sự kiện click vào đối tượng
  $(".item").click(function (e) {
    e.preventDefault();
    // Lấy chỉ số slide tương ứng với đối tượng được click
    var slideno = $(this).data("slide");
    // Chuyển đổi trang slider-nav đến slide tương ứng
    $(".slider-nav").slick("slickGoTo", slideno - 1);
    // Cập nhật slide hiển thị của slider-for để hiển thị hình ảnh tương ứng
    $(".slider-for").slick("slickGoTo", slideno - 1);
  });
});
