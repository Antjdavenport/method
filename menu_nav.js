


$(document).ready(function() {


  $(".mainNav").eq(1).css({
   borderBottomColor: '#6cbb45',
  
    
  });


$(".mainNav").eq(4).css({
   borderBottomColor: '#6cbb45',
 
});


$(".header_mob").eq(0).css({
   textDecoration: 'underline',
 
});




$("#menuBody_two").css({
        display: 'none',
        opacity: '0'
      
    });




$("#menuBody_two").stop().animate({
   opacity: "0",
  },
    300, function() {
      
    });

});

$(".mainNav").css({
  opacity: '0'
 
});




function drinks(){



$("#menuBody").stop().animate({
   opacity: "0",
  },
    300, function() {
      
      $("#menuBody").css({
        display: 'none',
      
    });
      $("#menuBody_two").css({
        display: 'flex',
   
    });

       drinkON();
    });



}



function foods(){



$("#menuBody_two").stop().animate({
   opacity: "0",
  },
    300, function() {
      
      $("#menuBody_two").css({
        display: 'none',
      
    });
      $("#menuBody").css({
        display: 'flex',
   
    });

      foodON();
    });



    

}


function drinkON(){

    $("#menuBody_two").stop().animate({
   opacity: "1",
  },
    300, function() {
      
    });



    $(".mainNav").eq(4).css({
    borderBottomColor: '#fffff',
 
});

    $(".header_mob").eq(0).css({
   textDecoration: 'none',
 
});


    $(".mainNav").eq(5).css({
   borderBottomColor: '#6cbb45',
 
});


    $(".header_mob").eq(1).css({
   textDecoration: 'underline',
 
});
};

function foodON(){

    $("#menuBody").stop().animate({
   opacity: "1",
  },
    300, function() {
      
    });


    $(".mainNav").eq(4).css({
    borderBottomColor: '#6cbb45',
 
});

    $(".header_mob").eq(0).css({
   textDecoration: 'underline',
 
});


    $(".mainNav").eq(5).css({
   borderBottomColor: '#fffff',
 
});


    $(".header_mob").eq(1).css({
   textDecoration: 'none',
 
});

};


  
// setTimeout(fade , 1000);
 

//  function fade(){
// $("#menuBody").animate({
//    opacity: "0",
//   },
//     300, function() {
//     $("#menuBody").css({
//         display: 'none',
      
//     });
// });




windowWidth = $(window).width();
var menu = 0;


function expand() {

    var nav = document.getElementById('smallNav')

    if (nav.className == "open") {

        nav.className = "";
        nav.className = "closed";
    } else {

        nav.className = "";
        nav.className = "open";

    };


}

// $(window).resize(function() {

//   $()

//      // yay readability
//     for (var lx=0, ly=0;
//          el != null;
//          lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
//     return {x: lx,y: ly};
// });
 



//   function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;
 
//   while (el) {
//     if (el.tagName == "BODY") {
//       // deal with browser quirks with body/window/document and page scroll
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       // for all other non-BODY elements
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }
 
//     el = el.offsetParent;
//   }
//   return {
//     x: xPos,
//     y: yPos
//   };
// }
 
// // deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);
 
// function updatePosition() {
// var myElement = document.querySelector("#header_mob_icons"); 
// var position = getPosition(myElement);
// console.log("The image is located at: " + position.x + ", " + position.y);
// }




