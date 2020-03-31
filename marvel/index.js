// SBS 슬라이더 시작
function SliderSbs__setAutoplayAvailable($slider, available) {
    $(this).data('slider-sbs-autoplay-available', available);
}

function SliderSbs__showRight($slider) {
    var $current = $slider.find('> .slides > div.active');
    var $post = $current.next();

    if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > div:first-child');
    }

    SliderSbs__show($slider, $post.index(), 'right');
}

function SliderSbs__showLeft($slider) {
    var $current = $slider.find('> .slides > div.active');
    var $post = $current.prev();

    if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > div:last-child');
    }

    SliderSbs__show($slider, $post.index(), 'left');
}

function SliderSbs__show($slider, index, dir) {
    if ( $slider.data('slider-sbs-now-animating') ) {
        return;
    }

    var animateDuration = $slider.data('slider-sbs-animate-duration');

    var $current = $slider.find(' > .slides > div.active');
    var $post = $slider.find(' > .slides > div').eq(index);

    if ( $current.index() == $post.index() ) {
        return;
    }

    $slider.find(' > .page-menu > li.active').removeClass('active');
    $slider.find(' > .page-menu > li').eq(index).addClass('active');

    $slider.data('slider-sbs-now-animating', true);

    var animateType = $slider.data('slider-sbs-animate-type');

    if ( dir == 'right' ) {
        if ( animateType == '1' ) {
            $post.css('left', '100%');
        }
        else if ( animateType == '2' ) {
            $post.css('left', '-100%');
        }

        $post.stop().animate({
            left:'0%'
        }, animateDuration);

        if ( animateType == '1' ) {
            $current.stop().animate({
                left:'-100%'
            }, animateDuration);
        }
    }
    else {
        if ( animateType == '1' ) {
            $post.css('left', '-100%');
        }
        else if ( animateType == '2' ) {
            $post.css('left', '-100%');
        }

        $post.stop().animate({
            left:'0%'
        }, animateDuration);

        if ( animateType == '1' ) {
            $current.stop().animate({
                left:'100%'
            }, animateDuration);
        }
    }

    setTimeout(function() {
        $slider.data('slider-sbs-now-animating', false);
    }, animateDuration);

    $post.addClass('active');
    $current.siblings('.before-active').removeClass('before-active');
    $current.addClass('before-active');
    $current.removeClass('active');
}

function SliderSbs__init() {
    $('.main-slider > .page-menu > li').click(function() {
        var $clicked = $(this);
        var $slider = $clicked.closest('.main-slider');
        var index = $clicked.index();
        var dir = index > $slider.find('> .page-menu > li.active').index() ? 'right' : 'left';

        SliderSbs__show($slider, index, dir);
    });

    $('.main-slider > .nav-btns > div').click(function() {
        var $clicked = $(this);
        var $slider = $clicked.closest('.main-slider');
        var dir = $clicked.index() == 0 ? 'left' : 'right';

        if ( dir == 'left') {
            SliderSbs__showLeft($slider);
        }
        else {
            SliderSbs__showRight($slider);
        }
    });

    $('.main-slider').data('slider-sbs-autoplay-available', true);

    $('.main-slider').mouseenter(function() {
        $(this).data('slider-sbs-autoplay-available', false);
    });

    $('.main-slider').mouseleave(function() {
        $(this).data('slider-sbs-autoplay-available', true);
    });

    $('.main-slider').each(function(index, node) {
        var $slider = $(node);

        if ( typeof $slider.attr('data-slider-sbs-autoplay-dir') != 'undefined' ) {
            var autoplayDir = $slider.attr('data-slider-sbs-autoplay-dir');

            $slider.data('slider-sbs-autoplay-dir', autoplayDir);
        }
        else {
            $slider.data('slider-sbs-autoplay-dir', 'right');
        }

        if ( typeof $slider.attr('data-slider-sbs-animate-type') != 'undefined' ) {
            var animateType = $slider.attr('data-slider-sbs-animate-type');

            $slider.data('data-slider-sbs-animate-type', animateType);
        }
        else {
            $slider.data('data-slider-sbs-animate-type', '1');
        }

        if ( typeof $slider.attr('data-slider-sbs-animate-duration') != 'undefined' ) {
            var animateDuration = parseInt($slider.attr('data-slider-sbs-animate-duration'));

            $slider.data('slider-sbs-animate-duration', animateDuration);
        }
        else {
            $slider.data('slider-sbs-animate-duration', 500);
        }

        if ( typeof $slider.attr('data-slider-sbs-autoplay') != 'undefined' ) {
            var autoplayTimeout = parseInt($slider.attr('data-slider-sbs-autoplay'));

            setInterval(function() {
                if ( $slider.data('slider-sbs-autoplay-available') ) {

                    if ( $slider.data('slider-sbs-autoplay-dir') == 'left' ) {
                        SliderSbs__showLeft($slider);
                    }
                    else {
                        SliderSbs__showRight($slider);
                    }
                }
            }, autoplayTimeout);
        }
    });
}

SliderSbs__init();

/* 무비,코믹 슬라이드 시작 */
var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    items: 5,
});

$(document).on('click', '.owl-item>div', function() {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
/* 무비,코믹 슬라이드 끝 */

