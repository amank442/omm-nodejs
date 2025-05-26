const express = require('express');
const router = express.Router();
const {createUser,loginuser, getAllitems} = require('../controllers/Usercontroller');
const auth = require('../middleware/Auth');



router.post('/createuser', createUser);
router.post('/loginuser', loginuser);
router.get('/userallitems/:userid',auth,getAllitems)

module.exports = router;
