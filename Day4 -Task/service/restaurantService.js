const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllRestaurantService = async () => {
    return await prisma.restaurant.findMany();
}

const fetchOneRestaurantService = async (restaurant_id) => {
    return await prisma.restaurant.findUnique({
            where: {
                restaurant_id: restaurant_id
            },
        });
};

const createRestaurantService = async(data) => {
    return await prisma.restaurant.create({
            data: data
        });
    
}

const updateRestaurantService = async (restaurant_id,data)=> {
    return await prisma.restaurant.update({
            where: {
                restaurant_id: restaurant_id
            },
            data: data
        });
    };


const deleteRestaurantService = async(data) => {
    return await prisma.restaurant.delete({
            where: {
                restaurant_id: data.restaurant_id
            },
        });

}

module.exports = { fetchAllRestaurantService, fetchOneRestaurantService, createRestaurantService, updateRestaurantService, deleteRestaurantService}