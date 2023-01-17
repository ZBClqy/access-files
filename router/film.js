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
            data.every((vals)=>{
                let obj={
                    title:vals
                }
               let imgs= fs.readdirSync(`/zbc/aliyunpan/电影/${vals}`)
               imgs.every((val)=>{
                    if(val.indexOf('.png')!=-1||val.indexOf('.jpg')!=-1||val.indexOf('.jpeg')!=-1){
                        obj.img=`电影/${vals}/${val}`
                        return false
                    }else{
                        obj.img='zbc'
                    }
               })
               textImg.push(obj)
               return true
            })
            res.send(message(true,textImg))
        }
    })
})

module.exports=router