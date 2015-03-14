var spa = spa || {};
spa.common = spa.common || {};
spa.common.ajax = (function () {

  var contentTypes = {
    json:'application/json'
  }

  function send (options) {
    var xhr = new XMLHttpRequest();

    //1) set callbacks
    xhr.onreadystatechange = function()
    {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 400) {
          options.success(xhr.responseText ? JSON.parse(xhr.responseText) : null);
        } else {
          if (options.error) {
            options.error(xhr);
          }
        }
      }
    };

    //3) set http type and url
    xhr.open(options.type, options.url, true);

    //4) set content type
    if (options.contentType && contentTypes[options.contentType]){
      xhr.setRequestHeader('Content-Type', contentTypes[options.contentType]);
    } 

    //5)set headers
    if (options.headers) {
      for (var key in options.headers) {
        if (options.headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }
    }

    //6) send with (optional) data
    xhr.send(JSON.stringify(options.data));
  }

  return {
    send:send
  };
})();