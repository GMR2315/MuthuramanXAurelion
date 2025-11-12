const express = require("express")

const app = express();

app.get("/",(req,res) => {
    //Data from frontened

    //DB logic

    // Data to frontend
    res.send("Homepage");
})


app.get("/products",(req,res) => {
    
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("Products");
})
app.post("/products",(req,res) => {
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("product Added");
    
})
app.put("/products",(req,res) => {
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("Product Updated");
    
})
app.patch("/products",(req,res) => {
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("Product Quantity Changed");
    
})
app.delete("/products",(req,res) => {
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("Product removed");
    
});

app.get("/order",(req,res) => {
    
    //Data from frontened
    
    //DB logic
    
    // Data to frontend
    res.send("Order API Working");
})



app.listen(3000, ()=> {
    console.log("Server running");
})