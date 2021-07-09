/** @format */

const employeeCallBack = require("../models/employeeCallApi");

exports.getEmpolyees = (req, res, next) => {
  employeeCallBack.callApi((response) => {
    res.json(response);
  });
};

exports.getEmpolyee = (req, res, next) => {
  employeeCallBack.callApi((response) => {
    res.json(
      response.filter(
        (employee) => employee.id === parseInt(req.params.employeeId)
      )
    );
  });
};

exports.getCustomEmpolyees = (req, res, next) => {
  let jsonArr = [];
  employeeCallBack.callApi((response) => {
    for (var i in response) {
      jsonArr.push({ name: response[i].name, dob: response[i].dob });
    }
    res.json(jsonArr);
  });
};

exports.getCustomEmpolyee = (req, res, next) => {
  let employeeSelected;
  let jsonArr = [];
  employeeCallBack.callApi((response) => {
    employeeSelected = response.filter(
      (employee) => employee.id === parseInt(req.params.employeeId)
    );
    jsonArr.push({
      name: employeeSelected[0].name,
      dob: employeeSelected[0].dob,
    });
    res.json(jsonArr);
  });
};
