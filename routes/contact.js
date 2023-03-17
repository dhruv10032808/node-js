const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();
const path=require('path');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact-us.html'));
})

router.post('/success',(req,res,next)=>{
    res.send('<html><h1>Form filled successfully</h1></html>')
})

module.exports=router