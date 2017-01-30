/**
 * @author Gilson Varghese <gilsonvarghese7@gmail.com>
 * @fileoverview All event handling functions
 * Rules
 * <li> id and class should use hyphen as seperator
 * <li> button should have btn sufix and textbox txt suffix
 * <li> 
*/

/**
* Handle refresh button clicks
*/
var handleRefresh = function(id) {
  var urlMapDetails = idURLMap[(id)];
  var url = urlMapDetails.url;
  var requestMethod = urlMapDetails.method;
  var body = urlMapDetails.body;

  /**
   * Handle the response GET request
  */
  var handleResponse = function (response, err, urlMapDetails) {
    if(err) {
      alert("Error: ", response);
      return;
    }

    /**
     * Set the result in the textbox
     */
    $("#" + urlMapDetails.guiEltID).val(response.json.result.value);
  };

  /**
   * Enough send the request
  */
  sendRequest(url, requestMethod, body, handleResponse, urlMapDetails);
};

/**
* Handle update button clicks
*/
var handleUpdate = function(id) {
  var urlMapDetails = idURLMap[(id)];
  var url = urlMapDetails.url;
  var requestMethod = urlMapDetails.method;
  var body = urlMapDetails.body;

  /**
  * Get the value in the textbox
  */
  if($("#" + urlMapDetails.guiEltID).val() == "") {
    body.json.data.value = $("#" + urlMapDetails.guiEltID).val();
  } else {
    alert("Please enter a valid value");
    return;
  }

  /**
   * Handle the response POST request
  */
  var handleResponse = function (response, err, urlMapDetails) {
    if(err) {
      alert(err);
      return;
    }
    alert("SUCCESS: ", response);
  };

  /**
   * Enough send the request
  */
  sendRequest(url, requestMethod, body, handleResponse, urlMapDetails);
};

/**
* Generic method to send HTTP request 
*/

var sendRequest = function(url, requestMethod, body, handleResponse, urlMapDetails) {
  /**
  * Send generic get or post JSOn request
  */
  $.ajax({
    "method": requestMethod,
    "url": url,
    "dataType": "json",
    "contentType": "application/json",
    "data": body,
    "success": function(response) {
      handleResponse(response, false, urlMapDetails);
    },
    "error": function(err) {
      handleResponse(err, true, urlMapDetails);
    }
  });
};