const express = require('express');
const router = express.Router();
const userController= require("../controllers/controller")
const window=require("../middlewares/auth")

router.get("/test-me", function (req, res) {

    res.send("My first ever api!")
})


router.post("/users", userController.newUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",window.Authenticate , window.authorise, userController.getUserDetails )

router.put("/users/:userId",window.Authenticate , window.authorise, userController.updateUserDetails)

router.delete('/users/:userId',window.Authenticate , window.authorise, userController.deleteUser)

module.exports = router;