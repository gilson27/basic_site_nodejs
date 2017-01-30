/**
 * @author Gilson Varghese <gilsonvarghese7@gmail.com>
 * @fileoverview event - uri map JSON
 * Rules
 * <li> id and class should use hyphen as seperator
 * <li> button should have btn sufix and textbox txt suffix
 * <li> 
*/

var idURLMap = {
  "network-tos-get": {
    "url": "/v1/api/system/network/tos",
    "method": "GET",
    "body": {
      "json": {
        "authentication": {
          "user": {"value": "admin"},
          "pwd": {"value": "Admin1234"}
        }
      }
    },
    "guiEltID": "network-tos-txt"
  },
  
  "network-tos-set": {
    "url": "/v1/api/system/network/tos",
    "method": "POST",
    "body": {
      "json": {
        "authentication": {
          "user": {"value": "admin"},
          "pwd": {"value": "Admin1234"}
        }, 
        "data": {"value": 0}
      } 
    },
    "guiEltID": "network-tos-txt"    
  }
};