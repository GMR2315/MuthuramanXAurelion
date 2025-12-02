const z = require("zod")
const { fetchAllRestaurantService, fetchOneRestaurantService, createRestaurantService, updateRestaurantService, deleteRestaurantService} = require("../service/restaurantService")

const restaurantByIdSchema = z.object({
    restaurant_id: z.string(),
});

const restaurantCreateSchema = z.object({
    restaurant_title: z.string(),
    rating: z.number(),          
    delivery_time: z.string(),
    location: z.string(),
    cuisines: z.string(),
    image: z.string().url(),
});

const restaurantUpdateSchema = z.object({
    restaurant_title: z.string(),
    rating: z.number(),
    delivery_time: z.string(),
    location: z.string(),
    cuisines: z.string(),
    image: z.string().url(),
});

const restaurantDeleteSchema = z.object({
    restaurant_id: z.string(),
});

const fetchAllRestaurantController = async (req, res) => {
    try {
        //data from frontend

        //DB logic
        const db_data = await fetchAllRestaurantService()
        //data to frontend
        res.status(200).json({ messsage: "Restaurants fetched", data: db_data })
    } 
    catch (err) {
    console.error(err);  
    
    res.status(500).json({
        message: "Internal server error",
        error: err.message,        
        code: err.code,            
        meta: err.meta            
    });
}
};

const fetchOneRestaurantController = async (req, res) => {
    try {
        //data from frontend
        const { restaurant_id } = restaurantByIdSchema.parse(req.params)

        //DB logic
        const db_data = await fetchOneRestaurantService(restaurant_id)
        //data to frontend
        res.status(200).json({ messsage: "specific Restaurants fetched", data: db_data })
    }
    catch (err) {
        res.status(500).json({ messsage: "Internal server", error: err })
    }
}

const  createRestaurantController =  async (req, res) => {
    try {
        //data from frontend
        const data = restaurantCreateSchema.parse(req.body)

        //DB logic
        const db_data = await createRestaurantService(data)
        //data to frontend
        res.status(200).json({ messsage: " Restaurants created", data: db_data })
    }
    catch (err) {
        res.status(500).json({ messsage: "Internal server", error: err })
    }
}

const updateRestaurantController = async (req, res) => {
    try {
        //data from frontend
        const restaurant_id = req.headers.restaurant_id
        const data = restaurantUpdateSchema.parse(req.body)

        //DB logic
        const db_data = await updateRestaurantService(restaurant_id,data)
        //data to frontend
        res.status(200).json({ messsage: " Restaurants updated", data: db_data })
    }
    catch (err) {
        res.status(500).json({ messsage: "Internal server", error: err })
    }

}

const deleteRestaurantController = async (req, res) => {
    try {
        //data from frontend
        const data = restaurantDeleteSchema.parse(req.query)
        console.log(data)
        //DB logic
        const db_data = await deleteRestaurantService(data)
        //data to frontend
        res.status(200).json({ messsage: " Restaurants Deleted" })
    }
    catch (err) {
        res.status(500).json({ messsage: "Internal server", error: err })
    }
}

module.exports = { fetchAllRestaurantController, fetchOneRestaurantController, createRestaurantController, updateRestaurantController, deleteRestaurantController }