const path=require('path');
const rootDir=require('../util/path')
exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}
exports.postSuccess=(req,res,next)=>{
    res.send('<html><h1>Form filled successfully</h1></html>')
}