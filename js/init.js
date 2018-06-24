/**
 * Created by yys on 2018/6/24.
 */

var DAPP_ID = "f9357d37d8a6462493b8c9346845e181c5da78047ca66a8f8ea6290bb5aed34a";
var BASE_URL = 'http://45.114.9.113:4096/api/dapps/' + DAPP_ID;
var COUNT_PER_PAGE = 20;
var State = {
    isLogin: false,
    timer: null
};
var UserInfo = {
    secret: '',
};


