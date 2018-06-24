/**
 * Created by yys on 2018/5/30.
 */

init = {};

new WOW().init();
EJS.config( {cache: true, type: '<', ext: '.template' } );
init.indexObj = new EJS({url: "partials/index.template?v=0.0.2"});
//  var percent = screen.width/1200 * 1260 / 1040;
var percent = (window.innerWidth - 18) / 1040;
var left = Math.floor(195 * percent);
var height = Math.floor(3979 * percent);
//  console.log(left);

var html = init.indexObj.render({obj:{per: percent}});
$(".content").html(html);
$(".page").css({"left": "-" + left + "px"});
$(".container").css({"min-height": "" + height + "px"});

var showWeiXin = false;
$(".wx_rwm").hide();
$("#wx_rwm,.wx_rwm").click(function () {
    if (showWeiXin) {
        $(".wx_rwm").hide();
        showWeiXin = false;
    } else {
        $(".wx_rwm").show();
        showWeiXin = true;
    }
});
