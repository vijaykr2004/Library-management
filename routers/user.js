const express=require('express');
const {user} =require("../data/user.json")

const routes=express.Router();

/** 
 * method : get
 * pararmeter:no
 * dscription :get all the users in the system
*/
routes.get("/user",(req,res)=>{
    res.status(200).json({
        sucess:true,
        data:user

    })
})
/** 
 * method : get
 * pararmeter:id
 * dscription :get the user by its id
*/
routes.get("/user/:id",(req,res)=>{
    const {id}=req.params;
    const userdata=user.find((e)=>e.id ===id)
    if(!userdata){
        return res.status(404).json({
            sucess:false,
            message:`user not found for id: ${id}`
        })
    }
    res.status(200).json({
        sucess:true,
        data:userdata
    })

})
/** 
 * method : post
 * pararmeter:id
 * description :add new user
*/
routes.post("/user",(req,res)=>{
    // to check req body have all field
    const{id,full_name,email,subcriptionType}=req.body;
    if(!id || !full_name || !email || !subcriptionType){
        return res.status(400).json({
            success:false,
            message:"All Field Is Required"
        })
    }
    
    
    const userdata=user.find((e)=>e.id===id)
    // to check user already exist using id
    if(userdata){
        return res.status(409).json({
            message:`User already Exist with id: ${id}`
        })
    }
    // to add data in user array
    user.push( {id,full_name,email,subcriptionType})
        res.status(201).json({
            sucess:true,
            message:"User Created Sucessfully"
})
})
/** 
 * method : put
 * pararmeter:id
 * description :update user using its ID:
*/
routes.put("/user/:id",(req,res)=>{
const {data}=req.body
const {id}=req.params;
const userdata=user.find((e)=>e.id===id)
if(!userdata){
    return res.status(404).json({
        success:false,
        message:`User Not Found with ID:${id}`
    })
}
user.map((e)=>{
    if(e.id ===id){
        updateduser={ ...e,
            ...data
        }
        return updateduser;

        }
        return e;
})
return res.status(200).json({
    success:true,
    data:updateduser,
    message:"User Updated Successfully"
})

})
/*
 * method :delete
 * pararmeter:id
 * description :delete user using its ID:
*/
routes.delete("/user/:id",(req,res)=>{
    const {id}=req.params;
    const finduser=user.find((e)=>e.id===id)
    if(!finduser){
        return res.status(404).json({
            success:false,
            message:`User Not Found with Id:${id}`
        })
    }
    const deleteduser=user.filter((e)=>e.id!==id)
        res.status(200).json({
            success:true,
            message:`User Deleted Successfully with Id ${id}`
            ,data:deleteduser
        })
    
})


module.exports=routes;