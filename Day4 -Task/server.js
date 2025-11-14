const { PrismaClient } = require("@prisma/client");
const express = require("express")
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API working");
})

//GET - http://localhost:3000/restaurants
try{
    app.get("/restaurants", async (req,res) => {
        //data from frontend

        //DB logic
        const db_data = await prisma.restaurant.findMany();
        //data to frontend
        res.status(200).json({messsage:"Restaurants fetched",data:db_data})
    })

}
catch (err){
    res.status(500).json({messsage:"Internal server",error:err})
}
    

//GET - http://localhost:3000/restaurants/:restaurant_id
try{
    app.get("/restaurants/:restaurant_id", async (req,res) => {
        //data from frontend
        const {restaurant_id} = req.params

        //DB logic
        const db_data = await prisma.restaurant.findUnique({
            where:{
                restaurant_id : restaurant_id
            },
        });
        //data to frontend
        res.status(200).json({messsage:"specific Restaurants fetched",data:db_data})
    })

}
catch (err){
    res.status(500).json({messsage:"Internal server",error:err})
}



//POST - http://localhost:3000/restaurants
try{
    app.post("/restaurants", async (req,res) => {
        //data from frontend
        const data = req.body

        //DB logic
        const db_data = await prisma.restaurant.create({
            data: data
        });
        //data to frontend
        res.status(200).json({messsage:" Restaurants created",data:db_data})
    })

}
catch (err){
    res.status(500).json({messsage:"Internal server",error:err})
}



//PUT - http://localhost:3000/restaurants

//USE HEADERS TO PASS THE RESTAURANT_ID EXAMPLE:

try{
    app.put("/restaurants",async (req,res) => {
        //data from frontend
        const restaurant_id = req.headers.restaurant_id
        const data = req.body

        //DB logic
        const db_data = await prisma.restaurant.update({
            where:{
                restaurant_id : restaurant_id
            },
            data: data
        });
        //data to frontend
        res.status(200).json({messsage:" Restaurants updated",data:db_data})
    })

}
catch (err){
    res.status(500).json({messsage:"Internal server",error:err})
}


//DELETE - http://localhost:3000/restaurants

// USE QUERY TO PASS THE RESTAURANT ID EXAMPLE: http://localhost:3000/restaurants/?restaurant_id=cmhyjl3zr0000voggmhm6193x

try{
    app.delete("/restaurants",async (req,res) => {
        //data from frontend
        const data = req.query
        console.log(data)
        //DB logic
        const db_data = await prisma.restaurant.delete({
            where:{
                restaurant_id : data.restaurant_id
            },
        });
        //data to frontend
        res.status(200).json({messsage:" Restaurants Deleted"})
    })

}
catch (err){
    res.status(500).json({messsage:"Internal server",error:err})
}

app.listen(3000, () => {
    console.log("server started");
})