import { Router } from 'express';
import { fetchPlaces } from './place.controller';

const router = Router();

router.get('/', fetchPlaces);

export default router;