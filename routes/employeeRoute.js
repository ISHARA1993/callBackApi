/** @format */

const express = require("express");

const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.get("/employee", employeeController.getEmpolyees);
router.get("/employee/:employeeId", employeeController.getEmpolyee);
router.get("/cusEmployees", employeeController.getCustomEmpolyees);
router.get("/cusEmployee/:employeeId", employeeController.getCustomEmpolyee);

module.exports = router;
