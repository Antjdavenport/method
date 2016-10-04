
// loading screen

window.addEventListener("load", function(){
   var load_screen = document.getElementById("load_screen");
   $("#load_screen").css({
      display: 'none',

   });

});



windowWidth = $(window).width();
var menu = 0;

// on window load sets the nav to right size
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



$(document).ready(function() {



    // makes the video end on the last frame

    video.addEventListener('ended', function(e) {
        this.src = this.src
    }, false);



    // to fix the sizing bug on every 5 or so loads container1 would size incorrectly
    setTimeout(containerHeight, 1000);

    function containerHeight() {
        var container1Height = $('#instaGram').height() - 6;
        $('#container1').css({
            height: container1Height,
        });


        returnHeightLarge = "40px";

        returnHeightSmall = ($('.canvasWrapSmall').height() / 10) + 15;

    };

    // end fix

    // sets up positioning of elements to enable scrolling

    var windowWidth = $(window).width();


    offset = ($('#header').offset());
    posY = offset.top - $(window).scrollTop();
    posX = offset.top - $(window).scrollLeft();

    offset2 = ($('#container1').offset());
    posY2 = offset2.top - $(window).scrollTop();
    posX2 = offset2.top - $(window).scrollLeft();

    offset3 = ($('#container2').offset());
    posY3 = offset3.top - $(window).scrollTop();
    posX3 = offset3.top - $(window).scrollLeft();

    var one = 1;
    var two = 0;
    var three = 0;


    // sets size of caption on instagram feed depending on mobile or desktop

    if (windowWidth < 900) {

        $('.col2').css({
            width: '40%',

        });

        $('.captionTxt').css({
            "margin-top": '2%',


        });

        $('.caption').css({
            "height": '100%',

        });


    } else {

        // if desktop then run the function for the caption rollovers. Must be a slight delay on initial load
        setTimeout(expandfeed, 3000);

    }


    // function for caption rollovers. Will only run if size is desktop.

    function expandfeed() {

        if (windowWidth > 899) {

            isAnimating = 0 // sets to 1 when animated. This is to stop animations from running all over if user rolls over many times

            $(document).on('mouseenter', ".caption", function() {


                var index = $(this).index('.caption');


                $('.caption').eq(index).stop().animate({
                        "height": "100%"
                    },
                    300,
                    function() {



                        $(".captionContent").eq(index).stop().animate({
                            opacity: '1'
                        }, 200);


                    });


            });


            $(document).on('mouseleave', ".caption", function() {

                var index = $(this).index('.caption');


                $(".captionContent").eq(index).stop().animate({
                    opacity: '0'
                }, 150);

                if (index == 0 || index == 3) {

                    $('.caption').eq(index).stop().animate({
                        "height": returnHeightLarge
                    }, 300, function() {

                    });

                };


                // sets the height of the caption to resize to on mouse leave

                if (index == 1 || index == 2) {

                    $('.caption').eq(index).stop().animate({
                        "height": returnHeightSmall
                    }, 300, function() {


                    });

                };

            });


        };
    };

    // for the header slider

    timeout();

    function timeout() {


        $(".coldpress").html("<p class=\"coldpress-bar\"></p><p class=\"coldpress-p\">TOLA'S FAVORITE THING</p>");
        $(".anchor").html("<p class=\"anchor-p\">could also be your favorite thing <br>(he loves the thai peanut sauce).</p>");
        setInterval(slider, 8000);
    }


    function slider() {

        if ($(window).width() > 770) {

            if (one == 1) {
                // $(".slide1").attr("class", "slide2");
                //
                $(".slide1").stop().animate({
                    "opacity": "0"
                }, 800);

                $(".coldpress").stop().animate({
                    "opacity": "0"
                }, 600, function() {

                    $(".coldpress").html("<p class=\"coldpress-bar\"></p><p class=\"coldpress-p\">TRY SOMETHING FRESH</p>");
                    $(".coldpress").stop().animate({
                        "opacity": "1"
                    }, 600);

                });


                $(".anchor").stop().animate({
                    "opacity": "0"
                }, 800, function() {

                    $(".anchor").html("<p class=\"anchor-p\">Enjoy it with us here, or on the go.</p>");
                    $(".anchor").stop().animate({
                        "opacity": "1"
                    }, 800);

                });



                $("#btnId").stop().animate({
                    "opacity": "0"
                }, 350, function() {

                    $("#btnId").html("VISIT US");
                    $("#btnId").stop().animate({
                        "opacity": "1"
                    }, 350);

                });



                one = 0;
                two = 1;

            } else if (two == 1) {

                $(".slide1").stop().animate({
                    "opacity": "1"
                }, 800);

                $(".coldpress").stop().animate({
                    "opacity": "0"
                }, 600, function() {

                    $(".coldpress").html("<p class=\"coldpress-bar\"></p><p class=\"coldpress-p\">TOLA'S FAVORITE THING</p>");
                    $(".coldpress").stop().animate({
                        "opacity": "1"
                    }, 600);

                });

                $(".anchor").stop().animate({
                    "opacity": "0"
                }, 800, function() {

                    $(".anchor").html("<p class=\"anchor-p\">could also be your favorite thing <br>(he loves the thai peanut sauce).</p>");
                    $(".anchor").stop().animate({
                        "opacity": "1"
                    }, 800);
                });



                $("#btnId").stop().animate({
                    "opacity": "0"
                }, 350, function() {

                    $("#btnId").html("MORE INFO");
                    $("#btnId").stop().animate({
                        "opacity": "1"
                    }, 350);

                });


                two = 0;
                one = 1;


            }


        };

    };


    // scrolls to each point on click

    var nav = document.getElementById('smallNav')

    var container3 = $("#container2")

    $('li').eq(0).click(function() {

        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, 'slow');

    });

    $('li').eq(2).click(function() {

        $('html, body').animate({
            scrollTop: $('#container2').offset().top
        }, 'slow');

    });

    $('li').eq(3).click(function() {

        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 'slow');

    });

    $('li.mobileNav').eq(0).click(function() {

        $('html, body').animate({
            scrollTop: $('#header').offset().top
        }, 'slow');
        nav.className = "closed";


    });

    $('li.mobileNav').eq(2).click(function() {

        $('html, body').animate({
            scrollTop: $('#container2').offset().top
        }, 'slow');
        nav.className = "closed";


    });


    $('li.mobileNav').eq(3).click(function() {

        $('html, body').animate({
            scrollTop: $('.mobile').offset().top
        }, 'slow');
        nav.className = "closed";


    });


    nextEntriesFirst();


}); // end of document ready

var count = 0;
var animating = 0;

function loadCount() {




    if (animating == 0) {

        animating = 1;

        count = count + 1;

        if (count == 5) {
            count = 1;
            loadMore();

        }


        loadMore();

    }

}




function loadMore() {

    $('.captionContent').stop().animate({
            "opacity": "0"
        },
        300,
        function() {


        });


    if (count == 1) {



        var loadHeight = $('#instaGram').height() - 6;
        $('#load').css({
            height: loadHeight,
            width: "0",
            right: "0"
        });

        $('#container1').css({
            height: loadHeight,
        });


        $('#load').stop().animate({
                "opacity": "1",
                "width": "100%"
            },
            1000, 'easeInOutCubic',
            function() {
                $('#instaGram').stop().animate({
                        "opacity": "0"
                    },
                    00,
                    function() {
                        $('#instaGram').html('');
                        nextEntriesSecond();

                        $('.captionContent').stop().animate({
                                "opacity": "0"
                            },
                            300,
                            function() {


                            });
                    });
            });



    } else if (count == 2) {



        var loadHeight = $('#instaGram').height() - 6;
        $('#load').css({
            height: loadHeight,
            width: "0",
            right: "0"
        });

        $('#container1').css({
            height: loadHeight,
        });


        $('#load').stop().animate({
                "opacity": "1",
                "width": "100%"
            },
            1000, 'easeInOutCubic',
            function() {
                $('#instaGram').stop().animate({
                        "opacity": "0"
                    },
                    00,
                    function() {
                        $('#instaGram').html('');
                        nextEntriesThird();

                        $('.captionContent').stop().animate({
                                "opacity": "0"
                            },
                            300,
                            function() {


                            });
                    });
            });

    } else if (count == 3) {



        var loadHeight = $('#instaGram').height() - 6;
        $('#load').css({
            height: loadHeight,
            width: "0",
            right: "0"
        });

        $('#container1').css({
            height: loadHeight,
        });


        $('#load').stop().animate({
                "opacity": "1",
                "width": "100%"
            },
            1000, 'easeInOutCubic',
            function() {
                $('#instaGram').stop().animate({
                        "opacity": "0"
                    },
                    00,
                    function() {
                        $('#instaGram').html('');
                        nextEntriesFourth();
                        $('.captionContent').stop().animate({
                                "opacity": "0"
                            },
                            300,
                            function() {


                            });
                    });
            });

    } else if (count == 4) {



        var loadHeight = $('#instaGram').height() - 6;
        $('#load').css({
            height: loadHeight,
            width: "0",
            right: "0"
        });

        $('#container1').css({
            height: loadHeight,
        });


        $('#load').stop().animate({
                "opacity": "1",
                "width": "100%"
            },
            1000, 'easeInOutCubic',
            function() {
                $('#instaGram').stop().animate({
                        "opacity": "0"
                    },
                    00,
                    function() {
                        $('#instaGram').html('');
                        nextEntriesFirst();
                        $('.captionContent').stop().animate({
                                "opacity": "0"
                            },
                            300,
                            function() {


                            });
                    });
            });
    }

}

function nextEntriesFirst() {

    var URL = "http://social-feeds.d.seven2.net/_ugc/method.json";
    var json = $.getJSON(URL, function(data) {

        var entries = data.Entries;
        var caption = entries[0].Caption;



        $.each(entries, function(i, data) {

            if (i === 0) {

                var title = data.Caption;
                var url = data.ItemLink
                var img = data.Images.High;

                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapOne"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasOne"></canvas></div>';
                $('#instaGram').append(photoHTML);


                captionContent = name + '<br/>' + shortText;

                $('.captionContent').eq(0).append(captionContent);

                var canvas = document.getElementById('canvasOne');
                var context = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.src = data.Images.High;




                imageObj.addEventListener("load", function() {
                    canvas.height = (imageObj.height / 2) - 100;



                    context.drawImage(imageObj, 100, 110, imageObj.width - 120, imageObj.height - 120, 0, 0, 320, 320);

                }, false);


            }

            if (i === 1) {

                var title = data.Caption;
                var url = data.ItemLink
                var name = data.Author.AccountName;


                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="feed2"><div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasThree"> </canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;

                $('.captionContent').eq(1).append(captionContent);

                var canvasThree = document.getElementById('canvasThree');

                var contextThree = canvasThree.getContext('2d');
                var imageObjThree = new Image();
                imageObjThree.src = data.Images.High;

                imageObjThree.src = data.Images.High;




                imageObjThree.addEventListener("load", function() {
                    canvasThree.height = (imageObjThree.height / 2) - 100;
                    contextThree.drawImage(imageObjThree, 100, 110, imageObjThree.width - 120, imageObjThree.height - 120, 0, 0, 320, 320);

                }, false);



                // $('#test').css




            }



            if (i === 2) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasFour"></canvas></div></div>';
                $('.feed2').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(2).append(captionContent);

                var canvasFour = document.getElementById('canvasFour');

                var contextFour = canvasFour.getContext('2d');
                var imageObjFour = new Image();
                imageObjFour.src = data.Images.High;




                imageObjFour.addEventListener("load", function() {
                    canvasFour.height = (imageObjFour.height / 2) - 100;
                    contextFour.drawImage(imageObjFour, 100, 110, imageObjFour.width - 120, imageObjFour.height - 120, 0, 0, 320, 320);

                }, false);


                // $('#test').css



            }

            if (i === 3) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";
                photoHTML = '<div class="canvasWrapTwo"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasTwo"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(3).append(captionContent);

                var canvasTwo = document.getElementById('canvasTwo');
                var contextTwo = canvasTwo.getContext('2d');
                var imageObjTwo = new Image();
                imageObjTwo.src = data.Images.High;


                imageObjTwo.addEventListener("load", function() {
                    canvasTwo.height = (imageObjTwo.height / 2) - 100;


                    contextTwo.drawImage(imageObjTwo, 100, 110, imageObjTwo.width - 120, imageObjTwo.height - 120, 0, 0, 320, 320);

                }, false);



                canvasTwo.height = imageObjTwo.height / 2;


                    $("#")

            };




            $('#instaGram').stop().animate({
                    "opacity": "1"
                },
                10,
                function() {

                    $('#load').css({


                        left: "0"
                    });



                    $('#load').stop().animate({
                            "opacity": "0.8",
                            "width": "0px"
                        },
                        1000, 'easeInOutCubic',
                        function() {

                            overlays()

                            $('#load').css({

                                left: "",
                                right: "0"



                            });

                            animating = 0;

                        });


                });
        });

    }); // end of json

};

function nextEntriesSecond() {
    var URL = "http://social-feeds.d.seven2.net/_ugc/method.json";
    var json = $.getJSON(URL, function(data) {

        var entries = data.Entries;
        var caption = entries[0].Caption;



        $.each(entries, function(i, data) {

            if (i === 3) {

                var title = data.Caption;
                var url = data.ItemLink
                var img = data.Images.High;

                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapOne"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasOne"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(0).append(captionContent);

                var canvas = document.getElementById('canvasOne');
                var context = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.src = data.Images.High;




                imageObj.addEventListener("load", function() {
                    canvas.height = (imageObj.height / 2) - 100;



                    context.drawImage(imageObj, 100, 110, imageObj.width - 120, imageObj.height - 120, 0, 0, 320, 320);

                }, false);


            }

            if (i === 4) {

                var title = data.Caption;
                var url = data.ItemLink
                var name = data.Author.AccountName;


                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="feed2"><div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasThree"> </canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(1).append(captionContent);

                var canvasThree = document.getElementById('canvasThree');

                var contextThree = canvasThree.getContext('2d');
                var imageObjThree = new Image();
                imageObjThree.src = data.Images.High;

                imageObjThree.src = data.Images.High;




                imageObjThree.addEventListener("load", function() {
                    canvasThree.height = (imageObjThree.height / 2) - 100;
                    contextThree.drawImage(imageObjThree, 100, 110, imageObjThree.width - 120, imageObjThree.height - 120, 0, 0, 320, 320);

                }, false);



                // $('#test').css




            }



            if (i === 5) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasFour"></canvas></div></div>';
                $('.feed2').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(2).append(captionContent);

                var canvasFour = document.getElementById('canvasFour');

                var contextFour = canvasFour.getContext('2d');
                var imageObjFour = new Image();
                imageObjFour.src = data.Images.High;




                imageObjFour.addEventListener("load", function() {
                    canvasFour.height = (imageObjFour.height / 2) - 100;
                    contextFour.drawImage(imageObjFour, 100, 110, imageObjFour.width - 120, imageObjFour.height - 120, 0, 0, 320, 320);

                }, false);


                // $('#test').css



            }

            if (i === 6) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";
                photoHTML = '<div class="canvasWrapTwo"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasTwo"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(3).append(captionContent);

                var canvasTwo = document.getElementById('canvasTwo');
                var contextTwo = canvasTwo.getContext('2d');
                var imageObjTwo = new Image();
                imageObjTwo.src = data.Images.High;


                imageObjTwo.addEventListener("load", function() {
                    canvasTwo.height = (imageObjTwo.height / 2) - 100;


                    contextTwo.drawImage(imageObjTwo, 100, 110, imageObjTwo.width - 120, imageObjTwo.height - 120, 0, 0, 320, 320);

                }, false);



                canvasTwo.height = imageObjTwo.height / 2;




            };




            $('#instaGram').stop().animate({
                    "opacity": "1"
                },
                10,
                function() {

                    $('#load').css({


                        left: "0"
                    });



                    $('#load').stop().animate({
                            "opacity": "0.8",
                            "width": "0px"
                        },
                        1000, 'easeInOutCubic',
                        function() {

                            overlays()

                            $('#load').css({

                                left: "",
                                right: "0"



                            });

                            animating = 0;

                        });


                });
        });

    }); // end of json

};



function nextEntriesThird() {

    var URL = "http://social-feeds.d.seven2.net/_ugc/method.json";
    var json = $.getJSON(URL, function(data) {

        var entries = data.Entries;
        var caption = entries[0].Caption;



        $.each(entries, function(i, data) {

            if (i === 7) {

                var title = data.Caption;
                var url = data.ItemLink
                var img = data.Images.High;

                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapOne"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasOne"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(0).append(captionContent);

                var canvas = document.getElementById('canvasOne');
                var context = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.src = data.Images.High;




                imageObj.addEventListener("load", function() {
                    canvas.height = (imageObj.height / 2) - 100;



                    context.drawImage(imageObj, 100, 110, imageObj.width - 120, imageObj.height - 120, 0, 0, 320, 320);

                }, false);


            }

            if (i === 8) {

                var title = data.Caption;
                var url = data.ItemLink
                var name = data.Author.AccountName;


                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="feed2"><div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasThree"> </canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(1).append(captionContent);


                var canvasThree = document.getElementById('canvasThree');

                var contextThree = canvasThree.getContext('2d');
                var imageObjThree = new Image();
                imageObjThree.src = data.Images.High;

                imageObjThree.src = data.Images.High;




                imageObjThree.addEventListener("load", function() {
                    canvasThree.height = (imageObjThree.height / 2) - 100;
                    contextThree.drawImage(imageObjThree, 100, 110, imageObjThree.width - 120, imageObjThree.height - 120, 0, 0, 320, 320);

                }, false);



                // $('#test').css




            }



            if (i === 9) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasFour"></canvas></div></div>';
                $('.feed2').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(2).append(captionContent);

                var canvasFour = document.getElementById('canvasFour');

                var contextFour = canvasFour.getContext('2d');
                var imageObjFour = new Image();
                imageObjFour.src = data.Images.High;




                imageObjFour.addEventListener("load", function() {
                    canvasFour.height = (imageObjFour.height / 2) - 100;
                    contextFour.drawImage(imageObjFour, 100, 110, imageObjFour.width - 120, imageObjFour.height - 120, 0, 0, 320, 320);

                }, false);


                // $('#test').css



            }

            if (i === 10) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";
                photoHTML = '<div class="canvasWrapTwo"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasTwo"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(3).append(captionContent);

                var canvasTwo = document.getElementById('canvasTwo');
                var contextTwo = canvasTwo.getContext('2d');
                var imageObjTwo = new Image();
                imageObjTwo.src = data.Images.High;


                imageObjTwo.addEventListener("load", function() {
                    canvasTwo.height = (imageObjTwo.height / 2) - 100;


                    contextTwo.drawImage(imageObjTwo, 100, 110, imageObjTwo.width - 120, imageObjTwo.height - 120, 0, 0, 320, 320);

                }, false);



                canvasTwo.height = imageObjTwo.height / 2;




            };




            $('#instaGram').stop().animate({
                    "opacity": "1"
                },
                10,
                function() {

                    $('#load').css({


                        left: "0"
                    });



                    $('#load').stop().animate({
                            "opacity": "0.8",
                            "width": "0px"
                        },
                        1000, 'easeInOutCubic',
                        function() {

                            overlays()

                            $('#load').css({

                                left: "",
                                right: "0"



                            });

                            animating = 0;

                        });


                });
        });

    }); // end of json

};



function nextEntriesFourth() {

    var URL = "http://social-feeds.d.seven2.net/_ugc/method.json";
    var json = $.getJSON(URL, function(data) {

        var entries = data.Entries;
        var caption = entries[0].Caption;



        $.each(entries, function(i, data) {

            if (i === 11) {

                var title = data.Caption;
                var url = data.ItemLink
                var img = data.Images.High;

                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapOne"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasOne"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(0).append(captionContent);

                var canvas = document.getElementById('canvasOne');
                var context = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.src = data.Images.High;




                imageObj.addEventListener("load", function() {
                    canvas.height = (imageObj.height / 2) - 100;



                    context.drawImage(imageObj, 100, 110, imageObj.width - 120, imageObj.height - 120, 0, 0, 320, 320);

                }, false);


            }

            if (i === 12) {

                var title = data.Caption;
                var url = data.ItemLink
                var name = data.Author.AccountName;


                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="feed2"><div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasThree"> </canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(1).append(captionContent);

                var canvasThree = document.getElementById('canvasThree');

                var contextThree = canvasThree.getContext('2d');
                var imageObjThree = new Image();
                imageObjThree.src = data.Images.High;

                imageObjThree.src = data.Images.High;




                imageObjThree.addEventListener("load", function() {
                    canvasThree.height = (imageObjThree.height / 2) - 100;
                    contextThree.drawImage(imageObjThree, 100, 110, imageObjThree.width - 120, imageObjThree.height - 120, 0, 0, 320, 320);

                }, false);



                // $('#test').css




            }



            if (i === 13) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 80)
                    .split(" ").join(" ") + "...";

                photoHTML = '<div class="canvasWrapSmall"><div class="rolloverCaption_s"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedULsmall"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasFour"></canvas></div></div>';
                $('.feed2').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(2).append(captionContent);

                var canvasFour = document.getElementById('canvasFour');

                var contextFour = canvasFour.getContext('2d');
                var imageObjFour = new Image();
                imageObjFour.src = data.Images.High;




                imageObjFour.addEventListener("load", function() {
                    canvasFour.height = (imageObjFour.height / 2) - 100;
                    contextFour.drawImage(imageObjFour, 100, 110, imageObjFour.width - 120, imageObjFour.height - 120, 0, 0, 320, 320);

                }, false);


                // $('#test').css



            }

            if (i === 14) {

                var title = data.Caption;
                var url = data.ItemLink;
                var name = data.Author.AccountName;
                var current = Math.floor(Date.now() / 1000)

                var d = new Date();
                // alert(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());


                var currentDay = d.getDate();
                var currentMonth = d.getMonth() + 1;
                var currentYear = d.getFullYear();

                var b = currentYear + "/" + currentMonth + "/" + currentDay;
                String(b);

                var dateparse = Date.parse(b);


                var previous = data.CreateStamp_Local;
                var year = previous.slice(0, 4);
                var month = previous.slice(5, 7);
                var date = previous.slice(8, 10);

                var a = year + "/" + month + "/" + date;
                String(a);


                var dateparsea = Date.parse(a);


                var elapsed = dateparse - dateparsea;
                var days = ((((elapsed / 1000) / 60) / 60) / 24);




                var shortText = jQuery.trim(title).substring(0, 220)
                    .split(" ").join(" ") + "...";
                photoHTML = '<div class="canvasWrapTwo"><div class="rolloverCaption"><div class="captionContent"></div></div><div class="caption" onclick="window.open(\'' + url + '\')"><div class="captionTxt"><ul class="feedUL"><li><img class="instagramIcon" src="_assets/img/insta.png"></li><li>@methodjuicecafe</li><li>' + days + ' days ago.</li></ul></div></div><canvas id="canvasTwo"></canvas></div>';
                $('#instaGram').append(photoHTML);

                captionContent = name + '<br/>' + shortText;
                $('.captionContent').eq(3).append(captionContent);

                var canvasTwo = document.getElementById('canvasTwo');
                var contextTwo = canvasTwo.getContext('2d');
                var imageObjTwo = new Image();
                imageObjTwo.src = data.Images.High;


                imageObjTwo.addEventListener("load", function() {
                    canvasTwo.height = (imageObjTwo.height / 2) - 100;


                    contextTwo.drawImage(imageObjTwo, 100, 110, imageObjTwo.width - 120, imageObjTwo.height - 120, 0, 0, 320, 320);

                }, false);



                canvasTwo.height = imageObjTwo.height / 2;




            };




            $('#instaGram').stop().animate({
                    "opacity": "1"
                },
                10,
                function() {

                    $('#load').css({


                        left: "0"
                    });



                    $('#load').stop().animate({
                            "opacity": "0.8",
                            "width": "0px"
                        },
                        1000, 'easeInOutCubic',
                        function() {

                            overlays()

                            $('#load').css({

                                left: "",
                                right: "0"



                            });

                            animating = 0;

                        });


                });
        });

    }); // end of json

};



function overlayOne() {

    if ($(window).width() > 900) {

        var canvas = $('.canvasWrapOne');
        //


        height = canvas.width();
        width = "40px"




        $('.canvasWrapOne').eq(0).css({

            "position": "relative",
        });

        $('.caption').eq(0).css({
            "width": height,
            "height": width,
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(0).stop().animate({
                "opacity": "1"
            },
            300,
            function() {
                return false;



            });

    } else {

        var canvas = $('.canvasWrapOne');
        //


        height = canvas.width();
        width = (canvas.height() / 10) + 15;




        $('.canvasWrapOne').eq(0).css({

            "position": "relative",
        });

        $('.caption').eq(0).css({
            "width": height,
            "height": "100%",
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(0).stop().animate({
                "opacity": "0.6"
            },
            300,
            function() {
                return false;



            });

        $('.captionContent').eq(0).stop().animate({
                "opacity": "1"
            },
            300,
            function() {


            });



    }
};



function overlayTwo() {

    if ($(window).width() > 900) {

        var canvas = $('.canvasWrapTwo');
        //


        height = canvas.width();
        width = "40px";



        $('.canvasWrapTwo').eq(0).css({

            "position": "relative",
        });

        $('.caption').eq(3).css({
            "width": height,
            "height": width,
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(3).stop().animate({
                "opacity": "1"
            },
            300,
            function() {
                return false;



            });

    } else {

        var canvas = $('.canvasWrapTwo').eq(0);
        //


        height = canvas.width();
        width = (canvas.height() / 10);




        $('.canvasWrapTwo').eq(0).css({

            "position": "relative",
        });

        $('.caption').eq(3).css({
            "width": height,
            "height": "100%",
            "position": "absolute",
            "bottom": 0,

        });

        $('.caption').eq(3).stop().animate({
                "opacity": "0.6"
            },
            300,
            function() {


            });

        $('.captionContent').eq(3).stop().animate({
                "opacity": "1"
            },
            300,
            function() {


            });


    }
};


function overlaySmall() {

    if ($(window).width() > 900) {

        var canvas = $('.canvasWrapSmall');
        //


        height = canvas.width();
        width = (canvas.height() / 10) + 15;




        $('.canvasWrapSmall').eq(0).css({

            "position": "relative",
        });

        $('.caption').eq(1).css({
            "width": height,
            "height": width,
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(1).stop().animate({
                "opacity": "1"
            },
            300,
            function() {
                return false;



            });

    } else {

        var canvas = $('.canvasWrapSmall').eq(0);
        //


        height = canvas.width();
        width = (canvas.height() / 10) + 15;




        $('.canvasWrapSmall').eq(0).css({

            "position": "relative",
        });



        $('.caption').eq(1).css({
            "width": height,
            "height": "100%",
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(1).stop().animate({
                "opacity": "0.9"
            },
            300,
            function() {
                return false;



            });


    }
};


function overlaySmallTwo() {

    if ($(window).width() > 900) {

        var canvas = $('.canvasWrapSmall').eq(1);
        //


        height = canvas.width();
        width = (canvas.height() / 10) + 15;




        $('.canvasWrapSmall').eq(1).css({

            "position": "relative",
        });




        $('.caption').eq(2).css({
            "width": height,
            "height": width,
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(2).stop().animate({
                "opacity": "1"
            },
            300,
            function() {
                return false;



            });

    } else {

        var canvas = $('.canvasWrapSmall').eq(1);
        //


        height = canvas.width();
        width = (canvas.height() / 10) + 15;




        $('.canvasWrapSmall').eq(1).css({

            "position": "relative",
        });

        $('.caption').eq(2).css({
            "width": height,
            "height": "100%",
            "position": "absolute",
            "bottom": 0
        });

        $('.caption').eq(2).stop().animate({
                "opacity": "0.9"
            },
            300,
            function() {
                return false;



            });


    }
};

function setInstaGramHeight() {
    var container1Height = $('#instaGram').height() - 6;
    $('#container1').css({
        height: container1Height,
    });

};

// run the overlays with a slight delay (error without delay)

function overlays() {

    setTimeout(overlayOne, 300);
    setTimeout(overlayTwo, 300);
    setTimeout(overlaySmall, 300);
    setTimeout(overlaySmallTwo, 300);
    setInstaGramHeight()



};

//things to do when window is resized

$(window).resize(function() {


    //rerun all the overlays to keep their size dynamic
    overlayOne();
    overlayTwo();
    overlaySmall();
    overlaySmallTwo();



    //keep container 1 always set to instagram height
    setInstaGramHeight()




    // // set the return height to what the new dimensions will be after resize


    //      returnHeightLarge = ($('.canvasWrapOne').height() / 10) + 15 ;

    //      returnHeightSmall = ($('.canvasWrapSmall').height() / 10) + 15 ;


    // nav responsive

    windowWidth = $(window).width();

    var nav = document.getElementById('smallNav');
    var logo = document.getElementById('logo');
    var blurb = document.getElementById('blurb');

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (windowWidth > 900 && nav.className == "open") {

        nav.className = "";
        nav.className = "closed";




    };

    if (windowWidth < 900) {

        $('.col2').css({
            width: '40%',

        });

        $('.captionTxt').css({
            "margin-top": '2%',

        });

        $('.caption').css({
            "height": '100%',

        });


        $('.captionContent').css({
            opacity: '1',

        });


    }

    if (windowWidth > 900) {

        $('.captionContent').css({
            opacity: '0',

        });

        $('.captionTxt').css({
            "margin-top": '0%',

        });


    };



});