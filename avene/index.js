console.clear();

/* 스크롤 */
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 200) {
        $('html').addClass('scroll-top-over-200');
    } else {
        $('html').removeClass('scroll-top-over-200');
    }
});

/* 메인 슬라이드 */
/* 기능 */
var SliderK__autoplayFunctions = [];

function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = $slider.find('.slides > div').eq(index);

    $currentSlide.removeClass('active');
    $postSlide.addClass('active');

    $slider.find('.page-nav > div.active').removeClass('active');
    $slider.find('.page-nav > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    if (typeof $slider.attr('data-autoplay-timeout-id') != 'undefined') {
        var timeoutId = $slider.attr('data-autoplay-timeout-id') * 1;
        clearTimeout(timeoutId);

        var autoplayInterval = $slider.attr('data-autoplay-interval') * 1;

        var functionId = $slider.attr('data-autoplay-function-id');

        var timeoutId = setTimeout(SliderK__autoplayFunctions[functionId], autoplayInterval);
        $slider.attr('data-autoplay-timeout-id', timeoutId);
    }

    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides > div:first-child');
    var $lastSlide = $slider.find('.slides > div:last-child');

    if (change == 1) {
        $postSlide = $currentSlide.next();

        if ($postSlide.length == 0) {
            $postSlide = $firstSlide;
        }
    } else if (change == -1) {
        $postSlide = $currentSlide.prev();

        if ($postSlide.length == 0) {
            $postSlide = $lastSlide;
        }
    }

    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function (index, node) {
        var $slider = $(node);

        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides > div.active').index();
    var slidesCount = $slider.find('.slides > div').length;

    var html = '';

    for (var i = 0; i < slidesCount; i++) {
        if (i == currentIndex) {
            html += '<div class="active"></div>';
        } else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav-box"><div class="page-nav-prev-place"></div><div class="page-nav">' + html + '</div><div class="page-nav-next-place"></div></div>';
    $slider.append(html);

    $slider.find('.page-nav > div').click(function () {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function () {
        var index = $(this).index();

        if (index == 0) {
            SliderK__showPrev($slider);
        } else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.attr('data-autoplay');

    $slider.attr('data-autoplay-now-work', 'Y');

    if ($slider.attr('data-play-stop-button') !== 'Y') {
        $slider.mouseenter(function () {
            $slider.attr('data-autoplay-now-work', 'N');
        });

        $slider.mouseleave(function () {
            $slider.attr('data-autoplay-now-work', 'Y');
        });
    } else {

        //page-nav-next-place

        if ($slider.find('.autoplay-btn-box').length == 0) {
            var html = '<div class="autoplay-btn-box"><div class="btn-start-play">▶</div><div class="btn-stop-play">〓</div></div>';
            $slider.append(html);
        }

        var $autoplayBtnBox = $slider.find('.autoplay-btn-box');

        if ($autoplayBtnBox.hasClass('into-page-nav-next-place')) {
            $autoplayBtnBox.appendTo($slider.find('.page-nav-next-place'));
        }

        $slider.find('.btn-start-play').click(function () {
            $slider.attr('data-autoplay-now-work', 'Y');
        });

        $slider.find('.btn-stop-play').click(function () {
            $slider.attr('data-autoplay-now-work', 'N');
        });
    }

    if (autoplay != 'Y') {
        return false;
    }

    var autoplayInterval = $slider.attr('data-autoplay-interval');

    if (typeof autoplayInterval == 'undefined') {
        autoplayInterval = 3000;
    } else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }

    var autoplayDirIsLeft = $slider.attr('data-autoplay-dir') == 'left';

    var SliderK__autoplayFunctionId = SliderK__autoplayFunctions.length;

    $slider.attr('data-autoplay-function-id', SliderK__autoplayFunctionId);

    SliderK__autoplayFunctions[SliderK__autoplayFunctionId] = function () {
        console.log(SliderK__autoplayFunctionId);
        if ($slider.attr('data-autoplay-now-work') == 'Y') {
            if (autoplayDirIsLeft) {
                SliderK__showPrev($slider);
            } else {
                SliderK__showNext($slider);
            }
        } else {
            var timeoutId = setTimeout(SliderK__autoplayFunctions[SliderK__autoplayFunctionId], autoplayInterval);
            $slider.attr('data-autoplay-timeout-id', timeoutId);
        }
    };

    var timeoutId = setTimeout(SliderK__autoplayFunctions[SliderK__autoplayFunctionId], autoplayInterval);
    $slider.attr('data-autoplay-timeout-id', timeoutId);
}

SliderK__init();

/* 베스트상품 리스트 슬라이드 캐러셀 */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="xi-angle-left-thin">', '<i class="xi-angle-right-thin"></img>'],
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 3
        },
        1000: {
            items: 4,
            slideBy: 4
        }
    },
    autoplay: false, // 오토 플레이 켜기
    autoplayTimeout: 3000, // 오토 플레이 주기
    autoplayHoverPause: true // 마우스 올리면 멈추게하기
});