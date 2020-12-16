"use strict";

$(() => {

    // AOSアニメーション
    AOS.init({
        offset: 200,
        delay: 100,
        duration: 1500,
        easing: 'liner',
        once: true,

    });


    // ハンバーガーメニュー
    $('#js-nav_toggle').click(() => {
        $('.nav_line').toggleClass('clicked');
        $('.nav_ham').toggleClass('clicked');
        $('.nav_list').toggleClass('clicked');
    });

    $('#js-head_btn').click(() => {
        $('.dark_fill').toggleClass('active');
        $('.calendar').toggleClass('open');
        $('body, html').toggleClass('fix');
    });

    $('#js-calendar_close').click(()=> {
        console.log("ok");
        $('.calendar').removeClass('open');
    })



    // スライドショー
    let nowPage = 0;
    let nextPage = 1;

    const slides = $("#js-mv_slide").find("img");
    const slideLength = slides.length;

    const fadeTime = 1500;
    const showTime = 3000;

    slides.hide();
    slides.eq(0).show();

    const slidesshow = () => {

        slides.eq(nowPage % slideLength).fadeOut(fadeTime).removeClass("zoom");
        slides.eq(nextPage % slideLength).fadeIn(fadeTime).addClass("zoom");

        nowPage++;
        nextPage++;
    }

    setInterval(slidesshow, showTime);


    // header固定
    // 1画面分以上スクロールしたら、ヘッダーを固定する

    let headerFix = $("header");

    $(window).scroll(function (){
        if ($(window).scrollTop()>54){
            headerFix.addClass("fix");

        } else {
            headerFix.removeClass("fix");

        }
    });

    $(function(){

        $('.top_news_item').click(function(){
            let num = $('.top_news_item').index(this);
            $('.top_news_item').removeClass('active');
            $('.top_news_contentlist').removeClass('active');
            $(this).addClass('active');
            $('.top_news_contentlist').eq(num).addClass('active');
        });


    });


    // Calendar


    const config = {


        locale:'ja',
        minDate: 'today',
        mode:'range',
        deteFormat: "Y-m-d"

    }

    // flatpickrを起動させるinputのID *classでも可
    flatpickr('#calendar', config);




});