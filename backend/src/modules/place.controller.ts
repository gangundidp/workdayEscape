import { Request, Response } from 'express';
import { getPlaces } from './place.service';

export const fetchPlaces = async (req: Request, res: Response) => {
  try {
    const places = await getPlaces();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching places' });
  }
};