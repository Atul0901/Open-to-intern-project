const express = require("express");  // --> importing the express framework
const router = express.Router();
const collegeControllers = require("../controllrs/collegeController");  // --> importing the collegeModel module
const internControllers = require("../controllrs/intrnController");  // --> importing the internModel module

router.post("/functionup/colleges", collegeControllers.createCollege);  // --> POST api to create a college

router.post("/functionup/interns", internControllers.createIntern);  // --> POST api to create an intern

router.get("/functionup/collegeDetails", collegeControllers.getDetails);  // --> GET api to get the college details

module.exports = router;