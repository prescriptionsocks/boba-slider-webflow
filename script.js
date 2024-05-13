    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:'auto',
  centeredSlides: true,
  speed: 1000,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });
  
function getActiveColor() {
    const colorPicker = document.querySelector('.swiper-slide-active > .color-picker');
    return colorPicker.style.backgroundColor;
}


  
swiper.on('slideNextTransitionStart', () => {
    // Select items on page
    let sliderText = document.querySelectorAll('.swiper-slide-active > .boba_slider_bg-text');
    let sliderImage = document.querySelector('.swiper-slide-active > .boba_slider_bg-image');
    let prevSliderText = document.querySelectorAll('.swiper-slide-prev > .boba_slider_bg-text');
    let prevSliderImage = document.querySelector('.swiper-slide-prev > .boba_slider_bg-image');

    // On click move items in, staggered
    const sliderNextAnimation = gsap.timeline({ ease: 'power4.out' });
    const activeColor = getActiveColor(); // Get active color
    sliderNextAnimation.call(getActiveColor); // Call getActiveColor function
    sliderNextAnimation.fromTo(sliderText, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
    sliderNextAnimation.fromTo(prevSliderText, { x: 0, opacity: 1 }, { x: -150, opacity: 0, duration: 0.5 }, '<');
    sliderNextAnimation.fromTo(sliderImage, { x: 300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 }, '-=0.7');
    sliderNextAnimation.fromTo(prevSliderImage, { x: 0, opacity: 1 }, { x: -150, opacity: 0, duration: 0.7 }, '<');
    sliderNextAnimation.set('.boba_slider_bg', { backgroundColor: activeColor }); // Set background color
    sliderNextAnimation.fromTo('.boba_slider_bg', { yPercent: 150, opacity: 100 }, { yPercent: 0, opacity: 100, duration: 0.5 }, '-=0.3');
});
