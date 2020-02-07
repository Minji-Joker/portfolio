$.scrollify({
    section: ".pages > .page",
    scrollbars: true,
    setHeights: false
});

$('.header .left-menu > .menu-box-1').click(function () {
    //alert("hi");    
    var has = $('.left-menu-open').hasClass('active');

    if (has) {
        $('.left-menu-open').removeClass('active');
    } else {
        $('.left-menu-open').addClass('active');
    }
});

$('.left-menu .left-menu-open .close-btn').click(function () {
    //alert('hi');
    var has = $('.left-menu-open').hasClass('active');

    if (has) {
        $('.left-menu-open').removeClass('active');
    } else {
        $('.left-menu-open').addClass('active');
    }
});

$('.header .left-menu .left-menu-open > .left-menu-box .menu-list > li').click(function () {
    var a = $(this).hasClass('active');

    if (a) {
        $(this).removeClass('active');
    } else {
        $(this).removeClass('active');
        $(this).addClass('active');
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['&lt;', '&gt;'],
    responsive: {
        0: {
            items: 3
        }
    },
    autoplay: true, // 오토 플레이 켜기
    autoplayTimeout: 3000, // 오토 플레이 주기
    autoplayHoverPause: true // 마우스 올리면 멈추게하기
})
