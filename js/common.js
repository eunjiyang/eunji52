$(function(){
    var n=0
    var rol = setInterval(rollng,3000)
    
    function rollng(){
        n++
        if(n==5) {
        $('.red_line').css({left:-680*0})
            n = 0
        }
        $('.img_wrap1').stop().animate({left:-680*n})
        
        $('.p_list li').removeClass('on')
        $('.p_list li:eq('+n+')').addclass('on')
        
        if(n==5){
            $('.p_list li:eq(0)').addclass('on')
        }
        return false;
    }
})