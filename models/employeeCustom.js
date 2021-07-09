/** @format */

const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "customEmployeeDetail.json"
);

const getEmployeeFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class EmployeeCustom {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  save() {
    this.id = Math.random().toString();
    getEmployeeFromFile((employees) => {
      employees.push(this);
      fs.writeFile(p, JSON.stringify(employees), (err) => {
        console.log("Error:" + err);
      });
      //fs.writeFile(p, JSON.stringify(employees));
    });
  }
  static fetchAll(cb) {
    getEmployeeFromFile(cb);
  }

  static findById(id, cb) {
    getEmployeeFromFile((employees) => {
      const employeeCust = employees.find((p) => p.id === id);
      cb(employeeCust);
    });
  }
};
