const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/booksData", BookController.booksData)

router.get("/getBooksInYear", BookController.getBooksInYear)

router.get("/getparticularBOoks", BookController.getparticularBOoks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)



module.exports = router;