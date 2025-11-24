const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fetchAllMoviesService = async () => {
    return await prisma.movie.findMany();
}

const fetchOneMovieService = async(movie_id) => {
    return await prisma.movie.findUnique(
            {
                where: {
                    movie_id: movie_id
                }
            }
        )
}

const createMovieService = async(data) => {
    return await prisma.movie.create({
            data: data
        })
}

const updateMovieService =async(movie_id,data) => {
    return await prisma.movie.update({
            where: {
                movie_id: movie_id
            },
            data: data
        })
        

}

const deleteMovieService = async(data) =>{

}



module.exports = { fetchAllMoviesService, fetchOneMovieService, createMovieService, updateMovieService, deleteMovieService }