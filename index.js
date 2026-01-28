const express=require('express')
const port=8081;
const app= express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).json({
    message:"Home page :-"   
    })

})
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
})
// app.all("*",(req,res)=>{
//     res.status(500).json({
//      message:"Not Build yet"   
//     })
// })