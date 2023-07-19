const express = require('express');

const router = express.Router();

const {addBusiness, updateBusiness, getBusiness, deleteBusiness, allBusiness, userbusinesses} = require('../controllers/PhoneController');
const {registerUser, loginUser, updateUser, updatePassword} = require('../controllers/UserController');


router.post('/addnew', addBusiness);
router.put('/updatebusiness', updateBusiness);
router.get('/getbusiness/:id', getBusiness);
router.get('/deletebusiness/:id', deleteBusiness);
router.get('/allbusinesses', allBusiness);
router.get('/ownerbusinesses/:id', userbusinesses)


router.post('/registeruser', registerUser);
router.get('/loginuser', loginUser);
router.put('/updateuser/:id', updateUser);
router.get('/updatepassword/:id', updatePassword);


module.exports = router;