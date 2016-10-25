import $ from 'jquery';

function disposeJSON(data, updatePage) {
  let resultJSON = getJSON(data);
  if (resultJSON != null) {
    if (resultJSON.bodyType) {
      let resultBody = getJSON(resultJSON.body);
      updatePage(resultBody);
    } else {
      alert(resultJSON.message);
    }
  }
}

function sendAjax(method, type, body, updatePage) {
  let paramBody = {
    method: method,
    type: type,
    body: JSON.stringify(body)
  };
  $.post("/Lark/sendAjax.mvc", JSON.stringify(paramBody), function(data, statueText) {
    disposeJSON(data, updatePage);
  });
}

function getJSON(data) {
  let type = Object.prototype.toString.call(data);
  if ("[object Object]" === type) {
    return data;
  } else {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
module.exports.sendAjax = sendAjax;
