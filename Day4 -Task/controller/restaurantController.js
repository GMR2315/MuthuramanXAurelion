const { fetchAllRestaurantService, fetchOneRestaurantService, createRestaurantService, updateRestaurantService, deleteRestaurantService} = require("../service/restaurantService")

const fetchAllRestaurantController = async (req, res) => {
    try {
        //data from frontend

        //DB logic
        const db_data = await fetchAllRestaurantService()
        //data to frontend
        res.status(200).json({ messsage: "Restaurants fetched", data: db_data })
    } 
    catch (err) {
    console.error(err);  // logs full error in terminal
    
    res.status(500).json({
        message: "Internal server error",
        error: err.message,        // human readable
        code: err.code,            // Prisma error code
        meta: err.meta             // extra info (optional)
    });
}
};

const fetchOneRestaurantController = async (req, res) => {
    try {
        //data from frontend
        const { restaurant_id } = req.params

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
        const data = req.body

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
        const data = req.body

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
        const data = req.query
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