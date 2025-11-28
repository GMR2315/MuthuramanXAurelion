import { Movie, Prisma } from "@prisma/client";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const fetchAllMoviesService = async (): Promise<Movie[]> => {
    return await prisma.movie.findMany();
}

export const fetchOneMovieService = async (movie_id: string): Promise<Movie | null> => {
    return await prisma.movie.findUnique(
        {
            where: {
                movie_id
            }
        }
    )
}

export const createMovieService = async (data: Prisma.MovieCreateInput): Promise<Movie> => {
    return await prisma.movie.create({
        data
    })
}

export const updateMovieService = async (movie_id: string, data: Prisma.MovieUpdateInput): Promise<Movie> => {
    return await prisma.movie.update({
        where: {
            movie_id: movie_id
        },
        data: data
    })


}

export const deleteMovieService = async (movie_id: string) => {
    return await prisma.movie.delete({
        where: {
            movie_id: movie_id
        }
    })

}



