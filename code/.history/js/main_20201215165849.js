"use strict";

$(() => {

    // 実装しないものは適宜追加、削除

     // ハンバーガーメニュー
    $('#nav_toggle').click(() => {
        $('.nav_line').toggleClass('clicked');
        $('.nav_ham').toggleClass('clicked');
        $('.nav_list').toggleClass('clicked');
    });

    $('#js-head_btn').click(() => {
        $('.dark_fill').toggleClass('active');
        console.log("ok");
    });

    //スムーズスクロール

    // #で始まるリンクをクリックしたら実行
    $('a[href^="#"]').click(function() {
         // スクロールの速度
        let speed = 800; // ミリ秒
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });



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
        if ($(window).scrollTop()>80){
            headerFix.addClass("fix");
            headerFix.css('background','red');
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

        // index() : index番号を取得する
        // eq() :index番号を使って特定の要素を取得する

    });


    // Calendar
    let toJPN = {
        weekdays : ['日', '月', '火', '水', '木', '金', '土'],
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
                '8月', '9月', '10月', '11月', '12月'
                ]
    };

    // '曜日'を日本語化
    flatpickr.init.prototype.l10n.weekdays.shorthand = toJPN.weekdays;

    // '月'を日本語化
    flatpickr.init.prototype.l10n.months.longhand = toJPN.months;

    // flatpickrを起動させるinputのID *classでも可
    flatpickr('#calendar');




});