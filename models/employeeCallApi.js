/** @format */

const request = require("request");
let url = "http://localhost:8080/api/employee";
let options = { json: true };

const callExternalApi = (callBack) => {
  request(url, options, (error, res, body) => {
    if (error) {
      return callBack(error);
    }

    if (!error && res.statusCode == 200) {
      return callBack(body);
    }
  });
};

module.exports.callApi = callExternalApi;
