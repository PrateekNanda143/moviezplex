import mongoose from 'mongoose';
import { BaseMovie, MovieQuery, Movie } from '../models/index';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: String, required: true },
  link: { type: String, required: true },
});
export const MovieModel = mongoose.model('Movie', movieSchema);

// export const createMovie = (values: Record<string, any>) =>
//   new MovieModel(values).save().then(movie => movie.toObject());

export const createMovie = (values: BaseMovie) =>
  new MovieModel(values).save().then(movie => movie.toObject());
export const getMovies = () => MovieModel.find();
export const getMovie = (value: MovieQuery) => MovieModel.find(value);
export const getMovieById = (id: string) => MovieModel.findById(id);
export const updateMovieById = (id: Partial<Movie>, values: MovieQuery) =>
  MovieModel.findByIdAndUpdate(id, values);
export const deleteMovieById = (id: string) =>
  MovieModel.findOneAndDelete({ _id: id });
