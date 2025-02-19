import express from 'express';
import cors from 'cors';
import middleware from './utils/middleware.js';
import mainRouter from './routes/mainRouter.js';

const app = express();

// middleware
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(middleware.requestLogger);

// Routes
app.use('/api', mainRouter);

// unknown endpoint and error handlers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
