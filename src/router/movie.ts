import { isAdmin, validateBody } from '../middlewares/index';
import {
  add,
  deleteMovie,
  movies,
  moviesByQuery,
  updateById,
} from '../controllers/movies';
import express from 'express';

export default (router: express.Router) => {
  router.post('/movies/add', validateBody, isAdmin, add);
  router.get('/movies', movies);
  router.get('/movies/search', moviesByQuery);
  router.put('/movies/:_id', isAdmin, updateById);
  router.delete('/movies/:id', isAdmin, deleteMovie);
};
