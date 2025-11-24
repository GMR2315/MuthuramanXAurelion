
const express = require("express");
const RestaurantRouter = require("./router/restaurantRouter");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API working");
})

app.use("/v1", RestaurantRouter)

app.listen(3000, () => {
    console.log("server started");
})