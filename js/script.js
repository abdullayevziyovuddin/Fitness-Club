$(function() {
    $('.header_menu_button').click(function() {
        $('.header_menu_ul').toggleClass('active');
    })
    $(window).resize(function() {
        if ($(window).width() < 1200) {
            $('.header_menu_ul').removeClass('active')
        }
    })
    function slider(){
        let btn_left=document.querySelector('.left');
        let btn_right=document.querySelector('.right');
        let images=document.querySelectorAll('.header_slider_item_box');
        let i=0;

        btn_left.onclick=function(){
            images[i].classList.remove('active');
            i--;
            if(i<0){i = images.length - 1}
            images[i].classList.add('active');
        }
        btn_right.onclick=function(){
            images[i].classList.remove('active');
            i++;
            if(i>images.length-1){i=0}
            images[i].classList.add('active');
        }
        

    }
    slider();

    $('.trainers_card').click(function(){
        $('.trainers_card').remuveClass('active');
        $(this).addClass('active');
        
    })
   
    
})
 $('#elastislide').elastislide().


$(function() {
    $('.header_menu_button').click(function() {
        $('.header_menu_ul').style.display = "block";
    })
 $('.top').click(function(){
     $('html,body').animate({ scrollTop:0 },2000)
 })
    
})