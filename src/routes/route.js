const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrictAndDate", CowinController.getDistrictAndDate)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/getWeather/today", CowinController.getWeather)
router.get("/getWeather/cities", CowinController.getSortedCities)
router.get("/getMemes", CowinController.getMeme)
router.post("/createMemes", CowinController.createMeme)



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;