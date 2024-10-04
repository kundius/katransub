import Swiper from 'swiper'

const homeSlider = document.querySelectorAll('.js-home-slider') || []
homeSlider.forEach((wrapper) => {
  var thumbs = wrapper.querySelector('.js-home-slider-thumbs')
  var main = wrapper.querySelector('.js-home-slider-main')
  var galleryThumbs = new Swiper(thumbs, {
    direction: 'vertical',
    allowTouchMove: false,
    slidesPerView: 3,
    loop: true,
    loopedSlides: 6,
    spaceBetween: 10,
    centeredSlides: true
  })
  var galleryTop = new Swiper(main, {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 6, //looped slides should be the same
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  })
  galleryTop.on('slideChange', function () {
    galleryThumbs.slideTo(galleryTop.activeIndex)
  })
})
