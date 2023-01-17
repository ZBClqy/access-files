const express=require('express')
const router=express.Router()
const fs=require('fs')
const message=require('../utils/message')

router.get('/resources',(req,res,next)=>{
    fs.readdir('/zbc/aliyunpan/电影',(err,data)=>{
        if(err){
            res.send(message(false))
        }else{
            let textImg=[]
            data.forEach((val)=>{
                let obj={
                    title:val
                }
               let imgs= fs.readdirSync(`/zbc/aliyunpan/电影/${val}`)
               imgs.forEach((val)=>{
                    if(imgs.indexOf('.png')!=-1||imgs.indexOf('.jpg')!=-1||imgs.indexOf('.jpeg')!=-1){
                        obj.img=val
                        return
                    }
               })
               textImg.push(obj)
            })
            res.send(message(true,obj))
        }
    })
})

module.exports=router