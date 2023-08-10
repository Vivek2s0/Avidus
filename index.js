const express=require("express")
require("dotenv").config()

const app=express()


const port=process.env.port
app.use(express.json())
app.get("/",(req,res)=>{
    try{
        res.send("Home Page")
    }
    catch(err){
        res.send(err)
    }
})

app.listen(port,async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err)
    }
    console.log(`server is running on port ${port} `)
})