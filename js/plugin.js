/*global $*/
$(function(){
$('.bg-img').on('resize', function (){
    var screenH = $(window).height();    
});
$('.bg-content').height($(window).height());
$('.my-work .bg-work-one').height($(window).height());
$('.my-work .bg-work-two').height($(window).height());
$('.my-content .my-header').css('paddingTop', $(window).height() / 2 - 70);
$('.my-social').css('paddingTop', $(window).height() / 2 - 50);

//LINK TAGS


//HOME
$('#home').on('click', function (){
    $('#home').addClass('active').siblings().removeClass('active');
    $('#s-arrow').removeClass('do-active');
    $('#f-arrow').removeClass('do-active');
    $('.work-page').fadeOut(400);
    $('.skill-page').fadeOut(400);
    $('.about-me').fadeOut(400);
    $('.contact-page').fadeOut(400);
    $('.bg-content .my-content').fadeIn(400);   
    $('.bg-content .my-social').fadeIn(400);
});

$('#about').on('click', function (){
$('#about').addClass('active').siblings().removeClass('active');
$('#f-arrow').addClass('do-active');
$('#s-arrow').removeClass('do-active');
$('.bg-content .my-content').fadeOut(400);
$('.bg-content .my-social').fadeOut(400);
$('.contact-page').fadeOut(1);
$('.skill-pages').fadeOut(400);
$('.about-me').fadeIn(400);
$('.about-me-content').fadeIn(400);
$('.skill-page').fadeIn(400);
$('.work-page').fadeIn(400);
});
$('.skill-page').on('click', function(){
    $('.about-me').fadeOut(400);
    $('.about-me-content').fadeOut(400);
    $('.skill-pages').fadeIn(400);
});

//CONTACT
$('#contact').on('click', function (){
    $('#contact').addClass('active').siblings().removeClass('active');
    $('#s-arrow').addClass('do-active');
    $('#f-arrow').removeClass('do-active');
    $('.bg-content .my-content').fadeOut(400);
    $('.bg-content .my-social').fadeOut(400);
    $('.about-me-content').fadeOut(1);
    $('.skill-pages').fadeOut(400);
    $('.skill-page').fadeOut(400);
    $('.work-page').fadeOut(400);
    $('.contact-page').fadeIn(400);
    });  
    
//Work Page
$('.work-page').on('click', function(){
    $('.about-me').fadeOut(400);
    $('.about-me-content').fadeOut(400);
    $('.bg-content').fadeOut(400);
    $('.my-work').slideDown(400);
    $('.my-work .bg-work-one').slideDown(400);
});

//CC-JITTERS
$('#cc-jitters').on('click',function(){
    $('.my-work .bg-work-one').fadeOut(400);
    $('.my-work .bg-work-two').fadeIn(400);
});

$('#switch').on('click',function(){
    $('.my-work .bg-work-two').fadeOut(400);
    $('.my-work .bg-work-one').fadeIn(400);
});

$('#home-work').on('click', function(){
    $('.my-work .bg-work-two').fadeOut(400);
    $('.my-work .bg-work-one').fadeOut(400);
    $('.bg-content').slideDown(400);
    $('.about-me').slideDown(400);
    $('.about-me-content').slideDown(400);
    $('.skill-page').slideDown(400);
    $('.work-page').slideDown(400);
});

$('#home-work-two').on('click', function(){
    $('.my-work .bg-work-two').fadeOut(400);
    $('.my-work .bg-work-one').fadeOut(400);
    $('.skill-pages').fadeOut(400);
    $('.bg-content').slideDown(400);
    $('.about-me').slideDown(400);
    $('.about-me-content').slideDown(400);
    $('.skill-page').slideDown(400);
    $('.work-page').slideDown(400);
});

$('.about-me .skill-page').mouseenter(function(){
    $('.about-me .skill-page .prop-skill').css('display', 'block');
});
$('.about-me .skill-page').mouseleave(function(){
    $('.about-me .skill-page .prop-skill').css('display', 'none');
});

$('.about-me .work-page').mouseenter(function(){
    $('.about-me .work-page .prop-skill').css('display', 'block');
});
$('.about-me .work-page').mouseleave(function(){
    $('.about-me .work-page .prop-skill').css('display', 'none');
});

});