(function(){$(function(){return $(".js-popup").click(function(){var e,n;return $(".panel").addClass("hidden"),n=$(this).parents(".icon").data("name"),e=$(".js-"+n),e.removeClass("hidden"),$(".rug").removeClass("hidden")}),$(".js-close, .rug").click(function(){return $(".panel").addClass("hidden"),$(".rug").addClass("hidden")})})}).call(this),$(function(){var e=Math.floor(6*Math.random()),n="pc";window.navigator.userAgent.toLowerCase().match(/(iphone|android)/i)&&(n="sp");var a="images/"+n+"/mv"+e+".jpg";document.querySelector(".hero").style.cssText="background-image: url("+a+")"});