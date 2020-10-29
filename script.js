$(function () {

//Header menu
    if ($('.layout_headerBlock_nav ul li').hasClass('active')) {
        $('.under_menu').css({'display' : 'block'});
        var height = $('.under_menu').css('height');
        $('.layout_header_container').css({'height' : '+=' + height});
    } else {
        $('.under_menu').css({'display' : 'none'});
    }

//Open/close menu for mobile
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

//Sub menu for calc, term

    $('.arrow_drop').on('click', function () {
        var ul = $(this).siblings('ul');
        ul.children('li').slideToggle();
    });

    $('.arrow_drop').on('click', function () {
        var table = $(this).siblings('table');
        table.find('tr').slideToggle();
    });

//Sliders for index
    $('.block3 .marker').click(function () {
        var id = $(this).attr('id');
//            $(this).siblings('.slide').hide();
        $('.slide').hide();
        $('.slide.' + id).show();
        $('.marker').removeClass('active');
        $(this).addClass('active')
    });
    $('.providers .marker').click(function () {
        var id = $(this).attr('id');
        $(this).siblings('li').hide();
        $('li a').hide();
        $('li a.' + id).show();
        $('.marker').removeClass('active');
        $(this).addClass('active')
    });

//Show more info
    $('.more').click(function(){
        $(this).siblings('.form').slideToggle(300);
        $('.simple_go').toggle(300);
    });

//Questions block
    $('.question .title').click(function () {
        $(this).siblings('.text').slideToggle(300);
        if ($(this).hasClass('bold')) {
            $(this).removeClass('bold');
        } else {
            $(this).addClass('bold');
        }
    });

//Table rating
    $('tr.deploy').click(function (){
        $(this).next('tr.dropdown').toggle('slow');
    });

    $('.settings').click(function (){
        if ($('.filter').is(':visible')) {
            $('.filter').hide();
            $('.section.rating .item.left').css({'margin-top': '95px'})
        } else {
            $('.filter').show();
            $('.section.rating .item.left').css({'margin-top': '710px'})
        }


    });

//Carousel for mobile

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


//Sliders for rating.html

    $("#Slider1").slider({
        from: 0,
        to: 2450,
        step: 100,
        smooth: true,
        limits: false,
        round: 0,
        dimension: "&nbsp;%",
        scale: [0, 10, 20, 50, 2450],
        skin: "round"
    });

    $("#Slider2").slider({
        from: 0,
        to: 1000000,
        step: 100,
        smooth: true,
        limits: false,
        round: 0,
        dimension: "",
        scale: [0, 1000, '10 тыс', '100 тыс', '1 млн'],
        skin: "round"
    });

    $("#Slider3").slider({
        from: 0,
        to: 1000000,
        step: 100,
        smooth: true,
        limits: false,
        round: 0,
        dimension: "",
        scale: [0, 1000, '10 тыс', '100 тыс', '1 млн'],
        skin: "round"
    });

    $("#Slider4").slider({
        from: 0,
        to: 1000,
        step: 100,
        smooth: true,
        limits: false,
        round: 0,
        dimension: "",
        scale: [1, 90, 180, '1 год', '3 года'],
        skin: "round"
    });

    $("#Slider5").slider({
        from: 0,
        to: 2450,
        step: 100,
        smooth: true,
        limits: false,
        round: 0,
        dimension: "&nbsp;%",
        scale: [20, 30, 40, 50, 60],
        skin: "round"
    });


});
