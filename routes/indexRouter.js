const express = require("express")
const router = express.Router();

const { home, register, readall } = require("../controllers/indexcontroller")

router.get("/",home);

router.post("/register",register);

router.get("/read",readall);



module.exports = router
/**
 * @method: get
 * @access: public
 * @route: /api/user/
 */
