function sliderAppartments() {
  let sliderAppartments = tns({
    container: ".js-appartments-slider",
    items: 1,
    autoplay: false,
    center: false,
    loop: false,
    speed: 400,
    gutter: 55,
    controls: false,
    navPosition: "bottom",
    slideBy: 1,
    navAsThumbnails: true,
    autoHeight: true,
    preventScrollOnTouch: "auto",
    responsive: {
      992: {
        fixedWidth: 1110,
        autoHeight: false,
        center: true,
      },
    },
  });
}

export default sliderAppartments;
