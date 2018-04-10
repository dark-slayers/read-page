class AjaxUtil {
  static get(url, callSuccess) {
    fetch(url).then(response => response.json()).then((json) => {
      if (json.errorResponse) {
        alert(json.message);
      } else {
        callSuccess(json);
      }
    }).catch(e => console.log("Oops, error", e));;
  }
  static post(url, data, callSuccess) {
    var myRequest = this.createRequest('POST',url,data);
    this.f(myRequest,callSuccess);
  }
  static put(url, data, callSuccess) {
    var myRequest = this.createRequest('PUT',url,data);
    this.f(myRequest,callSuccess);
  }
  static delete(url, data, callSuccess) {
    var myRequest = this.createRequest('DELETE',url,data);
    this.f(myRequest,callSuccess);
  }
  static f(myRequest,callSuccess){
    fetch(myRequest).then(response => response.json()).then((json) => {
      if (json.errorResponse) {
        alert(json.message);
      } else {
        callSuccess(json);
      }
    });
  }
  static createRequest(method,url,data){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var myInit = {
      method: method,
      headers: myHeaders,
      cache: 'default',
      body: JSON.stringify(data)
    };
    return new Request(url, myInit);
  }
}

export default AjaxUtil;
