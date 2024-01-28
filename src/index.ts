import express from 'express';
// import http from "http";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import router from './router';
import dotenv from 'dotenv-safe';
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// Express App
console.log('App Booting...');
const app = express();

app.use(helmet());

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});

//MongoDB Connection
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

//Router
app.use('/moviezplex', router());
