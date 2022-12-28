import express from 'express';
import * as userController from '../controller/user.controller.js';

var router = express.Router();

router.post("/save",(req,res,next)=>{
 //console.log(req.body); 
 userController.save(req.body).then((result)=>{
    res.json({"response":"record inserted"});           
 }).catch((err)=>{
    res.json({"response":"record not inserted"});
 });
});

export default router;
