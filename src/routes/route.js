const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createusers", userController.createUser)

router.post("/loginuser", userController.loginUser , middleware.authenticate )

//The userId is sent by front end
router.get("/getusers/:userId",middleware.authorise, middleware.authorise2, userController.getUserData)
router.post("/postusers/:userId/posts",middleware.authorise,middleware.authorise2, userController.postMessage)

router.put("/updateusers/:userId", middleware.authorise ,middleware.authorise2, userController.updateUser)
 router.delete('/deleteusers/:userId',middleware.authorise ,middleware.authorise2, userController.deleteUser)

module.exports = router;