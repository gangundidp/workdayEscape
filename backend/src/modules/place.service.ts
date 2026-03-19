import { db } from "../config/database";
import { Place } from './place.model';

export const getPlaces = (): Promise<Place[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM places', (err, results) => {
      if (err) reject(err);
      else resolve(results as Place[]);
    });
  });
};