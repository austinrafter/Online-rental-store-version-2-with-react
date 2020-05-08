//author Param Patel
//012421227
const express = require("express");
const router = express.Router();

const UserController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');
//signup
//receives
/* {email: ,
    password: ,
    first_name:,
    last_name: ,
    license_number: ,
    age: }*/
router.post("/signup", UserController.user_signup);
//receives email and password
/* returns 
{
  message: "Auth successful",
  token: token
})
store token in header use bearer token in header for login required purpose*/
router.post("/login", UserController.user_login);
//to delete user can either use route or ca directly delete user with token requires token in header inform of bearer token
router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
