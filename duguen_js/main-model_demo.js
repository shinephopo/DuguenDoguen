{
    // import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // direction: "vertical"은 상하 스크롤
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
  // $(function(){
  //   window.open("../winpopup.html","Popup","width=500, height=500, left=500, top=300");
  // });

