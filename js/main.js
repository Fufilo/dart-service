window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs__item_active")) {
                    otherItem.classList.remove("tabs__item_active");
                }
            })
            elem.classList.add("tabs__item_active")
        });
    });
    $('.team__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<div class="slider__arrow slider__prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider__arrow slider__next"><i class="fa-solid fa-chevron-right"></i></div>',
    });
    $('#buyNowBtn').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup__active');
        $('body').css('overflow', 'visible');
    })
    function popupOpen() {
        $('.popup').addClass('popup__active');
        $('body').css('overflow', 'hidden');
    }
});