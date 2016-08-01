$(function(){
    //banner轮播
    var items=$('.bannerimg ul li');
    var lis=$('.liasts .li');
    var moving=true;
    magicmove=function(n,dir){
        moving=false;
        var index=$('.bannerimg ul .active');
        index.addClass(dir).delay(800).queue(function(){
            moving=true;
            $(this).removeClass('active').removeClass(dir).dequeue();
        });
        var dd=(dir==='left')?'right':'left';
        $(n).addClass(dd);
        $(n).get(0).offsetWidth;
        $(n).removeClass(dd).addClass('active');
        $('.liasts .li').removeClass('active').eq(items.index(n)).addClass('active');
    }
    var rightbutton=$('.jiantou .rights');
    var leftbutton=$('.jiantou .lefts');
    rightbutton.on('click',function(){
        if($('.bannerimg ul .active').next().length){
            var ns=$('.bannerimg ul .active').next();
        }else{
            var ns=items.eq(0);
        }
        if(moving==true){
            magicmove(ns,'left');
        }
    })
    leftbutton.on('click',function(){
        if($('.bannerimg ul .active').prev().length){
            var ns=$('.bannerimg ul .active').prev();
        }else{
            var ns=items.eq(-1);
        }
        if(moving==true){
            magicmove(ns,'right');
        }

    })
    lis.on('click',function(){
        if($(this).index()>items.index($('.bannerimg.active'))){
            var d='left';
        }else{
            var d='right';
        }
        var n=items.eq($(this).index())
        magicmove(n,d);
    })

    var t=setInterval(function(){
        rightbutton.trigger('click');
    },2000)

    $('.banner').on('mouseover',function(){
        clearInterval(t);
    })

    $('.banner').on('mouseout',function(){
        t=setInterval(function(){
            rightbutton.trigger('click');
        },2000)
    })
//放大镜点击事件
    var search=$('.search');
    var meus=$('li.meum');
    var searching=$('.searching');
    var textwenben=$('.textwenben');
    var liss=$('.inner-result li');
    var h3=$('.inner-result h3');
    var sousuo=$('.sousuo');
    var mask=$('.mask');
    var body=$('body');
    search.on('click',function (e) {
        e.preventDefault();
        sousuo.css({display:'block'});
        mask.css({display:'block'});
        h3.addClass('middles');
        meus.addClass('xiaoshile');
        searching.animate({'opacity':1});
        textwenben.addClass('middles')
        $(liss[0]).animate({marginLeft:'28px',opacity:1},200);
        $(liss[1]).animate({marginLeft:'28px',opacity:1},400);
        $(liss[2]).animate({marginLeft:'28px',opacity:1},500);
        $(liss[3]).animate({marginLeft:'28px',opacity:1},600);
        $(liss[4]).animate({marginLeft:'28px',opacity:1},600);
        $('.gongge').addClass('diudiao');
        $('.footer').addClass('diudiao');
    })
var chahao=$('.chahao')
    chahao.on('click',function (e) {
        e.preventDefault();
        sousuo.css({display:'none'});
        mask.css({display:'none'});
        h3.removeClass('middles');
        meus.removeClass('xiaoshile');
        searching.animate({'opacity':0});
        textwenben.removeClass('middles')
        liss.css({opacity:0,marginLeft:'100px'})
        $('.gongge').removeClass('diudiao');
        $('.footer').removeClass('diudiao');
    })



//    加号
    var labels=$('label');
    var jiahao=$('label h3 .afert');
    var fenlan=('.fenlan');
    labels.on('click',function(i){
            if(jiahao.css('display')=='block'){
                $(this).find('.afert').toggleClass('dong');
                $(this).next().slideToggle();
            }
    })





//    sanghang点击事件
    var sanhang=$('.sanhang');
    var hang=$('.sanhang .heng');
    var shu=$('.sanhang .shu');
    sanhang.on('click',function(){
        $('.gongge').toggleClass('diudiao');
        $('.footer').toggleClass('diudiao');
        hang.toggleClass('bianba');
        shu.toggleClass('bianba');
        $('.header').toggleClass('bianchang');
        $('.header .headerinner').toggleClass('xiaoshi');
    })
})