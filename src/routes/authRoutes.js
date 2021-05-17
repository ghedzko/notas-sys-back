const{ Router} =require("express");
const router = Router();
const authCtrl = require("../controllers/auth.controller");

router.get( '/api/signin', authCtrl.signIn );


module.exports = router;