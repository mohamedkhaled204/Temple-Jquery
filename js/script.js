$(window).ready(function(){

    var header =$("header")
    var slideritem =$('.slider li')
    // header height
    header.height($(window).height());

    // when resize
    $(window).resize(function(){
        header.height($(window).height())
        slideritem.each(function(){
            $(this).css('paddingTop' , ($(window).height() - $(this).height()) /2)
        })
    })


    $(".links li a").click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    })

    slideritem.each(function(){
        $(this).css('paddingTop' , ($(window).height() - $(this).height()) /2)
    })
    // header slider
    $('.slider').bxSlider({
        pager : false
    });
    //mixitup protfolio
    var mixer = mixitup('.gallery');
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected')
    })
    //nicescroll
    $("html").niceScroll({
        cursorcolor : '#1abc9c' ,
        cursorborder : '1px solid #1abc9c',
        cursorborderradius :"0",
    });
    
    $(".links li a").click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        } , 1000)
    })

    //testimonial slider

    let autoslider =function(){
        $(".testslider .active").each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoslider()
                })
            }else{
                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active');
                    $('.testslider div').eq(0).addClass('active').fadeIn(1000);
                    autoslider();
                })
            }
        })
    }






    
})