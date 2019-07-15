import $ from "jquery";
function ajax(url, params, callback) {
  $.ajax({
    type: "get",
    url: url,
    data: params,
    dataType: "json",
    success: function(data) {
      callback(data);
    }
  });
}

export default ajax;
