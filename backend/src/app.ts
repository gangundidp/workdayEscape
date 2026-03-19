import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import placeRoutes from './modules/place.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/places', placeRoutes);

export default app;