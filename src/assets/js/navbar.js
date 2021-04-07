import $ from 'jquery'
var win = $(window),
    height = win.height(),
    // width = win.width(),
    navheight = $('.et-hero-tabs-container').height();

function setnavHeight() {
    if (isNaN(navheight)) {
        return navheight = $('.et-hero-tabs-container').height();
    } else {
        return console.log("we are good here");
    }

}

function sticky() {
    var scrollTop = win.scrollTop();
    // 
    if (isNaN(navheight)) {
        navheight = setnavHeight;
    }
    if (scrollTop > (height - navheight)) {
        $('.et-hero-tabs-container').addClass('sticky');
    } else {
        $('.et-hero-tabs-container').removeClass('sticky');
        $('nav').removeClass('nav_animate');
        setTimeout(function() {
            $('#logo').css({
                'left': -150,
                'transition': '.5s'
            });
            $('#social').css({
                'right': -150,
                'transition': '.5s'
            });
        }, 200);
    }
};
win.on('load', setnavHeight);
win.on('scroll', sticky);

//Navigational Menu
$('nav a').on('click', function(a) {
    var menuPlace = $(this).index();
    a.preventDefault();
    $('html, body').animate({
        scrollTop: $('section').eq(menuPlace).offset().top - $('nav').height()
    }, 700);
});