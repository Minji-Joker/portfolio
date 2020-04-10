console.clear();

// 우측 메뉴바
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    /*
    if ( scrollTop < 150 ) {
        scrollTop = 150;
    }
    */

    var duration = 500;
    $('.quick').stop().animate({
        top: scrollTop
    }, duration);

    console.log(scrollTop);
});

$('.slider > .page-btns > div').click(function () {
    var $this = $(this);
    var index = $this.index();

    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var $slider = $this.parent().parent();

    var $current = $slider.find(' > .slides > a.active');

    var $post = $slider.find(' > .slides > a').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

$('.slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .page-btns > div.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    };

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .page-btns > div:last-child');
        } else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };

    $post.click();
});

setInterval(function () {
    $('.slider-1').each(function (index, node) {
        var $slider = $(node);

        if ($slider.attr('data-mouseenter') != 'Y') {
            $slider.find('> .side-btns > div').eq(1).click();
        }
    });
}, 4000);


$('.slider-1').mouseenter(function () {
    $(this).attr('data-mouseenter', 'Y');
});

$('.slider-1').mouseleave(function () {
    $(this).attr('data-mouseenter', 'N');
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<img src="https://kimyang-sun.github.io/pf-img/vivienne-img/main_banner_left.png">', '<img src="https://kimyang-sun.github.io/pf-img/vivienne-img/main_banner_right.png">'],
    responsive: {
        0: {
            items: 1
        }
    },
    autoplay: true, // 오토 플레이 켜기
    autoplayTimeout: 3000, // 오토 플레이 주기
    autoplayHoverPause: true // 마우스 올리면 멈추게하기
})

// 베스트 오브 베스트 아이템
$('.item-con > .item-menu > ul > li').mouseenter(function () {
    var $this = $(this);
    var index = $this.index();

    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var $item__con = $(this).closest('.item-con');

    var $current = $item__con.find(' > .best-item-list.active');
    var $post = $item__con.find(' > .best-item-list').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

function itemAutoplay() {
    var $currentList = $('.item-con > .item-menu > ul > li.active');
    var $postList = $currentList.next();

    if ($postList.length == 0) {
        $postList = $('.item-con > .item-menu > ul > li:first-child');
    };
    //console.log($postList.length);

    $postList.mouseenter();
};

setInterval(function () {
    itemAutoplay();
}, 9000);

var $deliveryJoin1 = $('.footer > .footer-bn > ul > li:nth-child(4) > ul > li:first-child > a > img');
var $deliveryJoin2 = $('.footer > .footer-bn > ul > li:nth-child(4) > ul > li:last-child > a > img');

$deliveryJoin1.hover(function () {
    $(this).attr('src', 'https://kimyang-sun.github.io/pf-img/vivienne-img/footer_banner01_on.gif');
}, function () {
    $(this).attr('src', 'https://kimyang-sun.github.io/pf-img/vivienne-img/footer_banner01.gif');
});

$deliveryJoin2.hover(function () {
    $(this).attr('src', 'https://kimyang-sun.github.io/pf-img/vivienne-img/footer_banner02_on.gif');
}, function () {
    $(this).attr('src', 'https://kimyang-sun.github.io/pf-img/vivienne-img/footer_banner02.gif');
});

$('a').click(function (e) {
    if ($(this).attr('href') == '#') {
        //return false;
        e.preventDefault();
    }
});