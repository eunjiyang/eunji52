$(function(){
    
    var n = 0
    var rollng = setInterval(main_v,3000)
    
    function main_v(){
        n++
        if(n==4){
            n=1
            $('.img_list').css({left:-100*0 + '%'})
        }
        $('.img_list').animate({left:-100*n + '%'})
        
        $('.indi li').removeClass('on')
        $('.indi li:eq('+n+')').addClass('on')
        if(n==3){
            $('.indi li:eq(0)').addClass('on')
        }
    }
    
    $(window).resize(function(){
        var win_w = $(window).width()
        $('.img_list').css({left:-win_w*0 + '%'})
    }).resize()
    
    // next
    $('#nextBtn').click(function(){
        n++
        if(n==4){
            $('.img_list').css({left:-100*0 + '%'})
            n=1
        }
        $('.img_list').animate({left:-100*n + '%'})
        
        $('.indi li').removeClass('on')
            $('.indi li:eq('+n+')').addClass('on')
        if(n==3){
            $('.indi li:eq(0)').addClass('on')
        }
    })
    
    // prev
    $('#prevBtn').click(function(){
        n--
        if(n == -1){
            $('.img_list').css({left:-100*3 + '%'})
            n=2
        }
        $('.img_list').animate({left:-100*n + '%'})
        
        $('.indi li').removeClass('on')
            $('.indi li:eq('+n+')').addClass('on')
        if(n==3){
            $('.indi li:eq(0)').addClass('on')
        }
    })
    
    // indi
    $('.indi li').click(function(){
            $('.indi li').removeClass('on')
            $(this).addClass('on')
            
            n=$(this).index()
            $('.img_list').stop().animate({left:-100*n +'%'})
        })
  })