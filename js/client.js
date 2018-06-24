/**
 * Created by on 2016/10/19.
 */


var client = {};

var debug = false;
//默认
client.devHost = "http://45.114.9.113:4096/api/dapps/f9357d37d8a6462493b8c9346845e181c5da78047ca66a8f8ea6290bb5aed34a";
client.defaultHost = "http://45.114.9.113:4096/api/dapps/f9357d37d8a6462493b8c9346845e181c5da78047ca66a8f8ea6290bb5aed34a";

if(debug)
{
  client.host = client.devHost;
}

client.host = client.defaultHost;

client.post = function (url, data, callback) {
  $.ajax({
    // timeout: 5000,
    url: url,
    type: 'post',
    data: data
  })
    .done(
      function (json) {
        if (debug) {
          console.log(json);
        }
        callback(json);
      })
    .fail(function (json) {
      if (debug) {
        console.log(json);
      }
      callback(json);
    });
};

client.get = function (url, data, callback) {
  $.ajax({
    // timeout: 5000,
    url: url,
    type: 'get',
    data: {}
  })
    .done(
      function (json) {
        if (debug) {
          console.log(json);
        }
        callback(json);
      })
    .fail(function (json) {
      if (debug) {
        console.log(json);
      }
      callback(json);
    });
};

client.jsonp = function (url, data, callback, param) {
  var reqObj = {
    // timeout: 10000,
    url: url,
    data: data,
    dataType: 'jsonp',
    // jsonpCallback: callback,
    output: 'json',
    cache: true,//可能会不实时
    crossDomain: true,
    error: function (e) {
      console.log(e);
    },
    success: function (data) {
      callback instanceof Function && callback(data, param);
      (typeof callback === "string") && window[callback](data, param);
    }
  };
  // if(!(callback instanceof Function))
  // {
  //   reqObj.jsonpCallback = callback;
  // }
  $.ajax(reqObj);
}

