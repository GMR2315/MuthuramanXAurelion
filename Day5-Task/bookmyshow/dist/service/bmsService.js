"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieService = exports.updateMovieService = exports.createMovieService = exports.fetchOneMovieService = exports.fetchAllMoviesService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fetchAllMoviesService = async () => {
    return await prisma.movie.findMany();
};
exports.fetchAllMoviesService = fetchAllMoviesService;
const fetchOneMovieService = async (movie_id) => {
    return await prisma.movie.findUnique({
        where: {
            movie_id
        }
    });
};
exports.fetchOneMovieService = fetchOneMovieService;
const createMovieService = async (data) => {
    return await prisma.movie.create({
        data
    });
};
exports.createMovieService = createMovieService;
const updateMovieService = async (movie_id, data) => {
    return await prisma.movie.update({
        where: {
            movie_id: movie_id
        },
        data: data
    });
};
exports.updateMovieService = updateMovieService;
const deleteMovieService = async (movie_id) => {
    return await prisma.movie.delete({
        where: {
            movie_id: movie_id
        }
    });
};
exports.deleteMovieService = deleteMovieService;
