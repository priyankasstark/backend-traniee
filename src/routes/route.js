const express = require('express');
const router = express.Router();
const UserController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBooks", UserController.createBooks  )

router.get("/getBooks", UserController.getBooks)

module.exports = router;