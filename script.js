$(function () {
    $('.mobile_menu').on('click', function (){
        var a = $('.layout_header_menu');
        a.show();
    });
    $('.close').on('click', function (){
        var a = $('.layout_header_menu');
        a.hide();
    });

    $('.show_sub').on('click', function (){
        $(this).siblings('.sub_menu').slideToggle();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });

    $('.more').click(function(){
        $(this).siblings('.form').slideToggle(300);
        $('.simple_go').toggle(300);
    });

    $('.question .title').click(function () {
        $(this).siblings('.text').slideToggle(300);
        if ($(this).hasClass('bold')) {
            $(this).removeClass('bold');
        } else {
            $(this).addClass('bold');
        }
    });
});
