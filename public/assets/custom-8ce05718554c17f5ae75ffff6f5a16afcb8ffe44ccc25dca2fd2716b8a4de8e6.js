!function(s){s(".navbar-nav li a").bind("click",function(e){s(".navbar-nav li").removeClass("active"),s(this).closest("li").addClass("active");var i=s(this),t=s(i.attr("href"));t.length&&(s("html, body").stop().animate({scrollTop:s(i.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault())}),s("#Container").mixItUp(),s(".autoplay").slick({dots:!0,infinite:!1,speed:300,slidesToShow:2,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}(jQuery);