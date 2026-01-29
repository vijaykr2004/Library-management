const express=require('express');
// const {user}=require("./data/user.json");
const userRoutes = require("./routers/user");
const booksRoutes=require("./routers/books")

const port=8081;
const app= express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).json({
    message:"Home page :-"   
})
})
app.use("/", userRoutes);
app.use("/", booksRoutes)




app.use((req,res)=>{
    res.status(404).json({
     message:"Not Build yet"   
    })
})
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    
})


