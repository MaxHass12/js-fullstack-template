import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/', (_req, res) => {
  res.send('<h1>Hello World</h1>');
});

export default mainRouter;
