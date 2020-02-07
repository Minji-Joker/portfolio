console.clear();

$('.main .best-menu-bar > ul > li').click(function () {
    //alert("hi");    
    var $this = $(this);
    var $boo = $this.parent();
    var $bee = $boo.find('.active');

    $bee.removeClass('active');
    $this.addClass('active');

    var index = $this.index();
    var $boom = $this.closest('.best-menu-bar');

    $boom.find('.main .best-menu-bar > ul > li > .active').removeClass('active');
    $boom.find('.main .best-menu-bar > ul > li > .active').addClass('active');
});

$('.menu-box-4 > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fas fa-arrow-left">', '<i class="fas fa-arrow-right"></img>'],
    responsive: {
        0: {
            items: 4,
            slideBy: 4
        }
    },
    autoplay: true, // 오토 플레이 켜기
    autoplayTimeout: 3000, // 오토 플레이 주기
    autoplayHoverPause: true // 마우스 올리면 멈추게하기
});