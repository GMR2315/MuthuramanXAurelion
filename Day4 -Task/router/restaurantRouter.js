const express = require("express")

const RestaurantRouter = express.Router()
const { fetchAllRestaurantController, fetchOneRestaurantController, createRestaurantController, updateRestaurantController, deleteRestaurantController } = require("../controller/restaurantController")

//GET - http://localhost:3000/restaurants


RestaurantRouter.get("/restaurants", fetchAllRestaurantController)

//GET - http://localhost:3000/restaurants/:restaurant_id
RestaurantRouter.get("/restaurants/:restaurant_id", fetchOneRestaurantController)


//POST - http://localhost:3000/restaurants
 
RestaurantRouter.post("/restaurants", createRestaurantController)


//PUT - http://localhost:3000/restaurants

//USE HEADERS TO PASS THE RESTAURANT_ID EXAMPLE:


RestaurantRouter.put("/restaurants", updateRestaurantController)






//DELETE - http://localhost:3000/restaurants

// USE QUERY TO PASS THE RESTAURANT ID EXAMPLE: http://localhost:3000/restaurants/?restaurant_id=cmi433ylw0000vowcne351sr8


RestaurantRouter.delete("/restaurants", deleteRestaurantController)

module.exports = RestaurantRouter