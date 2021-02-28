const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller")

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    message: "ok",
  });
});
router.get("/employee",employeeController.get)

module.exports = router;
