const express = require('express');
const router = express.Router();

const authorController= require("../controllers/newAuthorController")
const bookController= require("../controllers/newBookController")
const publishercontroller = require( "../controllers/newPublishercontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/Books",bookController.createBook)

router.post("/newpublisher",publishercontroller.newpublisher)

router.get('/createBook',bookController.createBook)

router.get("/fetchData",bookController.fetchData)

router.put('/updating',bookController.updating)

router.put('/priceUpdate',bookController.priceUpdate)

module.exports = router