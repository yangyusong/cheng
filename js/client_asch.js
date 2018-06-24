/**
 * Created by YuSongYang on 2016/10/19.
 */

/**
 *
 */
client.getSearch = function (reqData, callback) {
  var url = "http://45.114.9.113:4096/api/dapps/f9357d37d8a6462493b8c9346845e181c5da78047ca66a8f8ea6290bb5aed34a/score/" + $("#search_title").val();
  client.get(url, reqData, callback);
};

client.getSearchAll = function (reqData, callback) {
  var url = "http://45.114.9.113:4096/api/dapps/f9357d37d8a6462493b8c9346845e181c5da78047ca66a8f8ea6290bb5aed34a/scores";
  client.get(url, reqData, callback);
};

client.newAccount = function(callback){
  var url = "http://45.114.9.113:4096/api/accounts/new";
  client.get(url, {}, callback);
}




