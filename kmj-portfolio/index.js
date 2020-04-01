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