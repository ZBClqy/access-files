const express=require('express')
const router=express.Router()
const fs=require('fs')
const message=require('../utils/message')

router.get('/resources',(req,res,next)=>{
    fs.readdir('/zbc/aliyunpan/电影',(err,data)=>{
        if(err){
            res.send(message(false))
        }else{
            res.send(message(true,data))
        }
    })
})

module.exports=router