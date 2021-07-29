$(function () {

    $('.header-top__mob-menu').on('click', function (event) {
        $('.header-top__mob-menu').toggleClass('header-top__mob-menu-active');
        $('.header-menu').toggleClass('header-menu__active');
        $('body').toggleClass('lock');
    });




    $('.header-menu__link--drop').on('click', function (event) {
        $('.header-menu__items--drop').toggleClass('header-menu__items--drop--active');
    });

    // Скрыть блок с категориями, по клику вне блока
    let btnCategories = $(".header-menu__link--drop"); // указываем кнопку
    let categories = $(".header-menu__items--drop");

    $(document).click(function (e) { // событие клика по веб-документу
        if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            // если клик был не по нашему блоку
            !categories.is(e.target) && categories.has(e.target).length === 0
            // и не по его дочерним элементам
        ) {

            categories.removeClass('header-menu__items--drop--active');
        }
    });



    // $(function () {
    //     $('.jqueryOptions').hide();

    //     $('#choose').change(function () {
    //         $('.jqueryOptions').slideUp();
    //         $('.jqueryOptions').removeClass('current-opt');
    //         $("." + $(this).val()).slideDown();
    //         $("." + $(this).val()).addClass('current-opt');
    //     });
    // });


    $('.zno__btn').on('click', function (e) {

        e.preventDefault();
        $('.zno__btn').removeClass('zno__btn--active');
        $(this).addClass('zno__btn--active');

        $('.zno__courses-wrapper').removeClass('zno__courses-wrapper--active');
        $($(this).attr('href')).addClass('zno__courses-wrapper--active');

    });


});