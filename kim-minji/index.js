$(function () {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        interstitialSection: ".footer",
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});

/*
$(window).resize(function() {
    var width = $(window).width();
    var height = $(window).height();

    if ( height > 900 || width > 900 ) {
        if ( $.scrollify.enabled() == false ) {
            $.scrollify.enable();
        }
    }
    else {
        if ( $.scrollify.enabled() ) {
            $.scrollify.disable();
        }
    }
});
*/
$(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();

    if (width < 900 || height < 600) {
        $.scrollify.disable();
    } else {
        $.scrollify.enable();
    }
});

// 스크롤 다운 버튼
$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

// 작업 리스트 내부 텍스트
function Box1__init() {
    $('.design .web').each(function (index, node) {
        var $box1 = $(node);

        var $hoverTxtBox = $box1.find('> .hover-txt-box');

        $box1.data('hover-txt-box', $hoverTxtBox);
        $box1.data('hover-txt-box-width', $hoverTxtBox.width());
    });

    $('.design .web').mousemove(function (e) {
        var $box1 = $(this);
        var $hoverTxtBox = $box1.data('hover-txt-box');
        var hoverTxtBoxWidth = $box1.data('hover-txt-box-width');

        var x = e.offsetX - hoverTxtBoxWidth / 2 - 10;
        var y = e.offsetY + 40;

        $hoverTxtBox.css({
            left: x + 'px',
            top: y + 'px'
        });
    });
}

Box1__init();

/* 그래픽디자인 슬라이드 시작 */
function Carousel1__onTranslated() {
    $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

    $('.carousel-1').attr('data-carousel-1-autoplay-status', 'Y');
}

$('.carousel-1 > .owl-carousel').owlCarousel({
    autoplay: false, // 오토 플레이
    autoplayTimeout: 10000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
    loop: true, // 끝에서 다시 처음으로 시작
    margin: 0,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        }
    },
    autoplayHoverPause: false,
    /* 필수 */
    onTranslated: Carousel1__onTranslated,
});

$('.carousel-1 .play').on('click', function () {
    $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

    $('.carousel-1').attr('data-carousel-1-autoplay-status', 'Y');
});

$('.carousel-1 .stop').on('click', function () {
    $('.carousel-1 > .owl-carousel').trigger('stop.owl.autoplay');

    $('.carousel-1').attr('data-carousel-1-autoplay-status', 'N');
});

/* 그래픽디자인 팝업 */
$('.popup-bg, .popup-1').click(function () {
    $('.popup-1,.popup-bg').css('display', 'none');
    $('html').addClass('no-scroll');
});

$('.popup-bg, .popup-2').click(function () {
    $('.popup-2,.popup-bg').css('display', 'none');
    $('html').addClass('no-scroll');
});

$('.popup-bg, .popup-3').click(function () {
    $('.popup-3,.popup-bg').css('display', 'none');
    $('html').addClass('no-scroll');
});

$('.btn-1').click(function () {
    $('.popup-1,.popup-bg').css('display', 'block');
    $('html').addClass('no-scroll');
});

$('.btn-2').click(function () {
    $('.popup-2,.popup-bg').css('display', 'block');
    $('html').addClass('no-scroll');
});

$('.btn-3').click(function () {
    $('.popup-3,.popup-bg').css('display', 'block');
    $('html').addClass('no-scroll');
});