$(function () {
    $('.login').on('click', function (){
        $('.layout_form_login').show();
    });

    $('.close_login').on('click', function (){
        $('.layout_form_login').hide();
    });


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

    $('.layout_contentBlock_block3 .marker').click(function () {
        var id = $(this).attr('id');
//            $(this).siblings('.slide').hide();
        $('.slide').hide();
        $('.slide.' + id).show();
        $('.marker').removeClass('active');
        $(this).addClass('active')
    });
    $('.layout_contentBlock_providers .marker').click(function () {
        var id = $(this).attr('id');
        $(this).siblings('li').hide();
        $('li a').hide();
        $('li a.' + id).show();
        $('.marker').removeClass('active');
        $(this).addClass('active')
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

    $('tr.deploy').click(function (){
        $(this).next('tr.dropdown').toggle('slow');
    });

    $('.settings').click(function (){
        $('.filter_block').toggle();
    });

    //    Carousel for mobile

    $(document).on('click', ".carousel-button-right",function(){
        var carusel = $(this).parents('.carousel');
        right_carusel(carusel);
        return false;
    });

    $(document).on('click',".carousel-button-left",function(){
        var carusel = $(this).parents('.carousel');
        left_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
        var block_width = $(carusel).find('.item').outerWidth();
        $(carusel).find(".items .item").eq(-1).clone().prependTo($(carusel).find(".items"));
        $(carusel).find(".items").css({"left":"-"+block_width+"px"});
        $(carusel).find(".items .item").eq(-1).remove();
        $(carusel).find(".items").animate({left: "0px"}, 200);

    }
    function right_carusel(carusel){
        var block_width = $(carusel).find('.item').outerWidth();
        $(carusel).find(".items").animate({left: "-"+ block_width +"px"}, 200, function(){
            $(carusel).find(".items .item").eq(0).clone().appendTo($(carusel).find(".items"));
            $(carusel).find(".items .item").eq(0).remove();
            $(carusel).find(".items").css({"left":"0px"});
        });
    }


});
