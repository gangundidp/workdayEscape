import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {

  private apiUrl = 'http://localhost:3000/places';
}