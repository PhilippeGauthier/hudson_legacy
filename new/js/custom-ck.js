/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 *       www.richardshepherd.com
 *       @richardshepherd   
 */// On your marks, get set...
$(document).ready(function(){$window=$(window);$("[data-type]").each(function(){$(this).data("offsetY",parseInt($(this).attr("data-offsetY")));$(this).data("Xposition",$(this).attr("data-Xposition"));$(this).data("speed",$(this).attr("data-speed"))});$('section[data-type="background"]').each(function(){var e=$(this),t=e.offset(),n=t.top;$(window).scroll(function(){if($window.scrollTop()+$window.height()>n&&n+e.height()>$window.scrollTop()){var t=-($window.scrollTop()/e.data("speed"));e.data("offsetY")&&(t+=e.data("offsetY"));var r="50% "+t+"px";e.css({backgroundPosition:r});$('[data-type="sprite"]',e).each(function(){var e=$(this),t=-($window.scrollTop()/e.data("speed")),n=e.data("Xposition")+" "+(t+e.data("offsetY"))+"px";e.css({backgroundPosition:n})});$('[data-type="video"]',e).each(function(){var e=$(this),t=-($window.scrollTop()/e.data("speed")),n=t+e.data("offsetY")+"px";e.css({top:n})})}})})});-----Smooth-scroll----;$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},1e3);return!1}}})});