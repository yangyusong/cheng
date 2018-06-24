/**
 */

init = {};

EJS.config( {cache: true, type: '<', ext: '.template' } );
init.indexObj = new EJS({url: "partials/index.template"});
init.searchObj = new EJS({url: "partials/search.template"});
init.search2Obj = new EJS({url: "partials/search2.template"});
init.search1Obj = new EJS({url: "partials/search1.template"});

init.toPageIndex = function(){
    var html = init.indexObj.render({obj:[{}]});
    $("#mainPanel").html(html);
};

init.toPageIndex();

init.toPagePerson = function(){
    var html = init.personObj.render({obj:[{}]});
    console.log(html);
    $("#mainPanel").html(html);
};

var mt380 = 460 * window.innerWidth / 1280;
var mtNext = mt380 * 2 / 5;
var mtNextWap = mtNext + 20;
$(".main_intro").css("margin-top", "-" + mt380 + "px");
$(".intro_next").css("margin-top", "" + mtNext + "px");
$(".dispatch").css("margin-bottom", "-120px");
$("#navbar").css("background-color", "#fff");

$(".spacial").css("margin-top", "-95px");
$(".spacial").css("padding-top", "-95px");
$(".carousel_wap").css("display", "none");
if(tool.isPhone())
{
    $("#navbar").addClass("navbar-inverse");
    $("#navbar").css("background-color", "#4b5a77");
    $(".saturn_logo_big").attr("width", 309 / 2);
    $(".saturn_logo_big").attr("height", 55 / 2);
    $(".main_intro").css("margin-top", "-356px");
    $(".baipishu").css("margin-top", "1px");
    $(".main_content").css("margin-top", "1px");
    $(".dispatch").css("margin-bottom", "-120px");
    $("#plan").css("margin-bottom", "-220px");
    $(".main_img").css("max-width", "324%");
    $(".intro_next").css("margin-top", "" + mtNextWap + "px");
    $(".main_div").removeClass("mt70");
    $(".main_div").addClass("mt50");
    $(".text_12_any").removeClass("text_12_3");
    $(".text_12_any").removeClass("text_12_6");
    $(".text_12_any").removeClass("text_12_12");
    $(".text_12_any").removeClass("text_12_4");
    $(".text_12_any").addClass("text_12_min");
    $(".slim_content_control").removeClass("slim_content");
    $(".main_back_controller").removeClass("main_back");
    $(".main_back_controller").addClass("main_back_wap");
    $(".beechat").css("margin-right", "1px");
    $(".spacial").css("margin-top", "15px");
    $(".spacial").css("padding-top", "15px");
    $(".second_line").removeClass("slim_content");
    $(".plan_text").addClass("plan_text_wap");
    $(".slim_content_20").addClass("slim_content");
    $(".slim_content").removeClass("slim_content_20");
    $(".plan_text_wap").removeClass("plan_text");
    $(".plan_img").css("display", "none");
    $(".carousel_wap").css("display", "block");
    $(".saturn_msgs").css("display", "none");


    //$(".dispatch").css("margin-top", "-210px");
    //$(".core_page").css("margin-top", "210px");

}

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

function logout() {
    $('#loginBtn').val('login');
    $('#secretInput').show();
    $('#mainPanel').hide();
    State.isLogin = false;
    if (State.timer) {
        clearInterval(State.timer);
        State.timer = null;
    }
}

$('#loginBtn').click(function () {
    if (State.isLogin) {
        logout();
    } else {
        login($('#secretInput').val());
    }
});

function onLogin(account) {
    State.isLogin = true;
    $('#loginBtn').val('退出');
    $('#secretInput').hide();
    $('#mainPanel').show();
    //updateBalanceView(account.balances);
    //loadContracts()
}


function search(){
    if($("#search_title").val() == "")
    {
        client.getSearchAll({}, function(data){
            console.log(data);
            var html = init.searchObj.render({obj:[{str: JSON.stringify(data)}]});
            $("#mainPanel").html(html);
        });
    }

    client.getSearch({}, function(data){
        console.log(data);
        //for(var i in data.score)
        //{
            if(_.isObject(data.score))
            {
                var showArr = [];
                for(var j in data.score)
                {
                    var oneLine = init.search2Obj.render({key: j, value: data.score[j]});
                    //console.log(oneLine);
                    showArr.push(oneLine);
                }

                console.log(showArr.join(""));
                //var line = init.search1Obj.render({obj: {content: showArr.join("")}});
                console.log(line);
                $("#mainPanel").html(showArr.join("") + "<div style='margin-bottom: 100px'></div>");
            }
            else{
                var html = init.searchObj.render({obj:[{str: JSON.stringify(data)}]});
                $("#mainPanel").html(html);
                //htmls = "";
                //for(var i in data.score)
                //{
                //    for(var k in data.score[i])
                //    {
                //        var showArr = [];
                //        for(var j in data.score[i])
                //        {
                //            var oneLine = init.search2Obj.render({key: j, value: data.score[i][j]});
                //            showArr.push(oneLine);
                //        }
                //
                //        htmls += init.search1Obj.render({obj: {content: showArr.join("")}});
                //    }
                //}
                //
                //$("#mainPanel").html(htmls);
            }
        //}

    });
}

function showPass(res){
    if(res.success)
    {
        new $.zui.Messager("注册成功：" + res.secret, {
            icon: 'bell' //
        }).show();
    }
    else{
        new $.zui.Messager("注册失败", {
            icon: 'bell' //
        }).show();
    }

}


function add(){
    var args = [];
    args.push($(".form_name").val());
    args.push($(".form_timestamp").val());
    args.push($(".form_recorder").val());
    args.push($(".form_time").val());
    args.push($(".form_subject").val());
    args.push($(".form_score").val());
    args.push($(".form_comments").val());
    var data = {
        secret: UserInfo.secret,
        fee: "1",
        type: 1000,
        args: JSON.stringify(args)
    }
    $.ajax({
        type: 'PUT',
        url: BASE_URL + '/transactions/unsigned',
        data: data,
        dataType: 'json',
        success: function(ret) {
            console.log(ret);
            if (!ret.success) {
                alert(ret.error);
                return;
            }
            else{
                new $.zui.Messager("成绩上链成功", {
                    icon: 'bell' //
                }).show();
            }
        }
    });
}

function login(secret) {
    $.ajax({
        type: 'POST',
        url: BASE_URL + '/login',
        data: {
            secret: secret
        },
        dataType: 'json',
        success: function(ret) {
            console.log(ret);
            if (!ret.success) {
                alert(ret.error);
                return;
            }
            UserInfo.secret = secret;
            UserInfo.publicKey = ret.account.publicKey;
            UserInfo.address = ret.account.address
            onLogin(ret.account);
        }
    });
}



