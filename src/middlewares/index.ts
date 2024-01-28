import express from 'express';
import Joi from 'joi';

import { get, unset } from 'lodash';

// Middleware to validate request body using Joi
export const validateBody = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const moviePayloadSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    rating: Joi.string().required(),
    link: Joi.string().required(),
    role: Joi.string().required(),
  });

  try {
    const { error } = await moviePayloadSchema.validateAsync(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    } else {
      return next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.details[0].message });
  }
};

//

export const isAdmin = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const getRole = get(req.body, 'role');

    if (getRole && getRole === process.env.role) {
      const actualReq = unset(req.body, 'role');
      if (actualReq) {
        next();
      }
      return res.status(400);
    }
    return res.status(403).json({ error: 'Permission Denied' });
  } catch (error) {
    console.log(error);
  }
};
