const express=require('express');
const {books}=require("../data/books.json")
const routes=express.Router()
/** 
 * method : get
 * pararmeter:no
 * dscription :get all the books in the system
*/
routes.get("/books",(req,res)=>{
    res.status(200).json({
        sucess:true,
        data:books

    })
})
/** 
 * method : get
 * pararmeter:Id
 * dscription :get the book by its id
*/
routes.get("/books/:id",(req,res)=>{
    const {id}=req.params
    const bookdata=books.find((e)=>e.id === id)
    if(!bookdata){
        res.status(404).json({
            success:false,
            message:`Book Not Found For id ${id}`
        })
    }
    res.status(200).json({
        success:true,
        data:bookdata
    })

})
/** 
 * method : post
 * pararmeter:no
 * dscription :add book in the system
*/
routes.post("/books",(req,res)=>{
const{id,name,genre,price,publisher}=req.body
if(!id || !name || !genre|| !price || !publisher){
    return res.status(400).json({
        success:false,
        message:"Required to fill all field(id,name,genre,price,publisher)"

    })
}
const bookdata=books.find((e)=>e.id===id)
if(bookdata){
return res.status(409).json({
    success:false,
    message:`Book id already Exist with id ${id}`
})
}
books.push({id,name,genre,price,publisher})
res.status(201).json({
    success:true,
    message:"Book Added Sucessfully"
})

})
routes.put("/books/:id",(req,res)=>{
const {id}=req.params
const {data}=req.body;
const bookdata=books.find((e)=>e.id===id)
if(!bookdata){
    return res.status(404).json({
        success:false,
        message:`Book does't exist for id ${id}`
    })
}
books.map((e)=>{
    if(e.id ===id){
        updatedbook={ 
            ...e,
            ...data
        }
        return updatedbook;
        }
        return e;
})
return res.status(200).json({
    success:true,
    data:updatedbook,
    message:"User Updated Successfully"
})
})
routes.delete("/books/:id",(req,res)=>{
const {id}=req.params
const findbook=books.find((e)=>e.id===id)
if(!findbook){
    return res.status(404).json({
        success:false,
        message:`Book not found with id${id}`

    })
}
const deletedbook=books.filter((e)=>e.id !==id)
        res.status(200).json({
            success:true,
            message:`User Deleted Successfully with Id ${id}`,
            data:deletedbook
        })


})



module.exports=routes;