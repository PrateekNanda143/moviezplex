import express from 'express';
import movie from './movie';

const router = express.Router();

export default (): express.Router => {
  movie(router);

  return router;
};
