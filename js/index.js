var menu = document.getElementById("menu");
var menus = document.getElementById("menus");
var btn = document.getElementById("btn");
var box = document.getElementById("box");
var search = document.getElementById("src");

menu.addEventListener("click", () => {
  menus.classList.toggle("active");
});

btn.addEventListener("click", () => {
  box.classList.add("is-active");
});
search.addEventListener("click", () => {
  box.classList.remove("is-active");
});

// ############################# back to top ###############################

var scroll = document.getElementById("backtotop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset >= 562) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ############################# back to top ###############################

// ############################# slider ###############################
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// ############################# end slider ###############################

// ############################# slider1 ###############################
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
// ############################# slider1 ###############################

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1500,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
