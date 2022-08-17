const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor", BookController.createAuthor  )

router.post("/createBook", BookController.createBook)

router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)

router.get("/authorOfBOok", BookController.authorOfBOok)





module.exports = router;