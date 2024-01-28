import {
  createMovie,
  deleteMovieById,
  getMovie,
  getMovieById,
  getMovies,
  updateMovieById,
} from '../db/movie';
import { BaseMovie, Movie, MovieQuery, Movies } from '../models/index';
import express from 'express';

// Creating Movies
export const add = async (req: express.Request, res: express.Response) => {
  try {
    // const { title, genre, rating, link } = req.body;
    const createMovieReq: BaseMovie = req.body;
    if (!createMovieReq) {
      return res.sendStatus(400);
    }

    const movie = await createMovie(createMovieReq);
    return res.status(200).json(movie).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).send(error.message);
  }
};

// Fetching all Movies
export const movies = async (req: express.Request, res: express.Response) => {
  try {
    const getMoviesList: Movies = await getMovies();
    return res.status(200).json(getMoviesList);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).send(error.message);
  }
};

// Search movie by query
export const moviesByQuery = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const query: MovieQuery = req.query;
    if (!query) {
      return res.sendStatus(400);
    }
    const movies: Movies = await getMovie(query);
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).send(error.message);
  }
};

// Update an existing movie's info by id
export const updateById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const movieId: Partial<Movie> = req.params;
    const updatedMovie: Partial<BaseMovie> = req.body;
    console.log(movieId, '===', updatedMovie);
    const updatedMovieData = await updateMovieById(movieId, updatedMovie);
    if (!updatedMovieData) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    return res.status(200).json(updatedMovieData);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).send(error.message);
  }
};

// Delete by Movie Id
export const deleteMovie = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const movie = await getMovieById(id);
    if (movie) {
      const deletedMovie = await deleteMovieById(id);
      return res.json(deletedMovie);
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
};
