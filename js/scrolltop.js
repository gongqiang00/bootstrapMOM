/**
 * Created by QiHao on 2017/3/17.
 */

//顶部滑动切换样式
$(document).ready(function(){
    function play(){
        setInterval(function top(){
            var i=$(document).scrollTop();
            var j=$(window).width();
            if(i>30){
                $(".nav-diy").css({"padding":"0","background-color":"#000"})
            }else{
                $(".nav-diy").css({"padding":"20px 0","background-color":"transparent"})
            }
            if(j<768){
                $(".nav-diy").css({"padding":"0","background-color":"#000"})
            }
        },1)
    }
    play();


//数字动画
    if($("p.count").length >0){
        $("p.count").counterUp({
            delay: 10, // the delpay time in ms
            time: 1000 // the speed time in ms
        });
    }

    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });


//表单验证
    $('#contactForm').validate({

        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            },
            email: {
                required: true,
                email: true
            }

        },
        messages:{
            name:{
                required:"This is required"
            },
            message:{
                required:"This is required"
            },
            email:{
                required:"This is required",
                email:"Not a valid email address"
            }
        }
    })
});




//锚链接跳转滑动效果
$('a.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 40
            }, 900);
            return false;
        }
    }
});



//无序排列图片
$(".categories .cat a").click(function(){
    $(this).addClass("active").parent().siblings().children("a").removeClass("active");
});
$(function () {

    var filterList = {

        init: function () {

            // MixItUp plugin
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'linear'
                // call the hover effect
            });
        }
    };
    // Run the show!
    filterList.init();
});


//查看图片
function photo(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
}
photo();




new WOW().init();


