import $ from 'jquery';
class AjaxUtil {
  static showErrorIfExist(data) {
    let reponse=data;
    let type = Object.prototype.toString.call(data);
    if ("[object Object]" !== type) {
        reponse= JSON.parse(data);
    }
    if(reponse.devMessage!=null&&reponse.message!=null){
      alert(reponse.message);
    }
  }
  static ajax(url, methed, data, callSuccess, callError) {
    $.ajax({
      url: url,
      type: methed,
      async: true,
      data: data,
      timeout: 5000,
      // beforeSend: function(xhr) {
      //   console.log(xhr)
      //   console.log('发送前')
      // },
      success: callSuccess,
      error: callError,
      // complete: function() {
      //   console.log('结束')
      // }
    });
  }
  static patch(url, data, callSuccess, callError) {
    $.ajax({
      url: url,
      type: 'PATCH',
      contentType: 'application/json',
      async: true,
      data: JSON.stringify(data),
      timeout: 5000,
      success: callSuccess,
      error: callError,
    });
  }
  static delete(url, data, callSuccess) {
    $.ajax({
      url: url,
      type: 'DELETE',
      async: true,
      data: data,
      timeout: 5000,
      success: callSuccess,
      error: function(data, xhr, textStatus) {
        alert(RequestUtil.getErrorMessage(data));
      }
    });
  }
  static get(url, param, call) {
    $.get(url, param, function(data) {
      AjaxUtil.showErrorIfExist(data);
      call(data);
    });
  }
  static post(url, param, call) {
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      async: true,
      data: JSON.stringify(param),
      timeout: 5000,
      success: function(data) {
        AjaxUtil.showErrorIfExist(data);
        call(data);
      },
    });
  }
}

export default AjaxUtil;
