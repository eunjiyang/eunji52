$(document).ready(function(){
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
        $('.p_list li:eq('+n+')').addClass('on')
        
        if(n==5){
            $('.p_list li:eq(0)').addClass('on')
        }
        return false;
    }
    window.parent.postMessage('music_check', '*');
    $("#music").click(function(e){
        window.parent.postMessage('music', '*');
    });
    window.addEventListener('message', function(e) {
        if(e.data == 'on') {
            $('#music').addClass('active');
        } else {
            $('#music').removeClass('active');
        }
    });
});