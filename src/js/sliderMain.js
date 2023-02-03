function sliderMain() {
  if (window.document.documentElement.clientWidth < 992) {
    const carousel = document.querySelectorAll(".js-main-slider");
  
    carousel.forEach((item) => {
      tns({
        container: item,
        items: 1,
        autoplay: false,
        loop: false,
        speed: 400,
        gutter: 20,
        controls: false,
        navPosition: "bottom",
        slideBy: 1,
        navAsThumbnails: true,
        autoHeight: true,
        preventScrollOnTouch: "auto",
      });
    });
  }
}

export default sliderMain;


