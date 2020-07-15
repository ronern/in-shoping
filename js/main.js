$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })

    $('.spoiler-body').hide(300);
        $(document).on('click','.spoiler-head',function (e) {
            e.preventDefault()
            $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
        })

    $('.reviews').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
        adaptiveHeight: true
    });

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    $("#count").html(Math.floor(getRandomArbitrary(10, 100)));
    console.log(Math.floor(getRandomArbitrary(10, 100)))
});

