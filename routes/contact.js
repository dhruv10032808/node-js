const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();
const path=require('path');
const contactController=require('../controllers/contact')

router.get('/contactus',contactController.getContact)

router.post('/success',contactController.postSuccess)

module.exports=router