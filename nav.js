
$(window).load(function() {
    underline_scroll();



setTimeout(fixNavWidthiOS, 1000);


});

//fixes bug that caused the jquery append function in the instagram to overflow its div

function fixNavWidthiOS(){

   
$(window).trigger('resize');

};

  
// end fix 

$(window).scroll(function() {


// creates an underline for each item in the nav bar depending on whether that secion has been scrolled to

    underline_scroll();

    });

function underline_scroll(){


 offset = ($('#header').offset());
    headerY = offset.top - $(window).scrollTop();
    headerX = offset.top - $(window).scrollLeft();


    offset = ($('#container2').offset());
    posY = offset.top - $(window).scrollTop();
    posX = offset.top - $(window).scrollLeft();


    offset = ($('#footer').offset());
    footerY = offset.top - $(window).scrollTop();
    footerX = offset.top - $(window).scrollLeft();

 



  if (headerY > -200) {


    $('.mainNav').eq(0).css({
        borderBottomColor: '#6cbb45'
    });


   

}
    else {

        $('.mainNav').eq(0).css({
        borderBottomColor: '#fff'
    });


    } ;






    if (posY < 450 && posY > -315) {


    $('.mainNav').eq(2).css({
        borderBottomColor: '#6cbb45'
    });


}
    else {

        $('.mainNav').eq(2).css({
        borderBottomColor: '#fff'
    });


    } ;






      if (footerY < 750) {


    $('.mainNav').eq(3).css({
        borderBottomColor: '#6cbb45'
    });

}
    else {

        $('.mainNav').eq(3).css({
        borderBottomColor: '#fff'
    });


    } ;


  


//  mobile nav coloured white depending on location


 if (headerY > -400) {


  

        $('.mobileNav').eq(0).css({
        color: 'white'
    });

}

 else {

        $('.mobileNav').eq(0).css({
        color: '#6cbb45'
    });


    } ;




 if (posY < 300 && posY > -40) {


  

        $('.mobileNav').eq(2).css({
        color: 'white'
    });

}

 else {

        $('.mobileNav').eq(2).css({
        color: '#6cbb45'
    });


    } ;




    if (posY < -1400 ) {


  

        $('.mobileNav').eq(3).css({
        color: 'white'
    });

}

 else {

        $('.mobileNav').eq(3).css({
        color: '#6cbb45'
    });


    } ;



}

   