import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceCard } from '../../shared/components/place-card/place-card';
import { FilterBar } from '../../shared/components/filter-bar/filter-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterBar, PlaceCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  places: any[] = [];

  onFiltersChanged(filters: any) {
    console.log('Filters:', filters);

    // Temporary mock data
    this.places = [
      {
        name: 'Third Wave Coffee',
        distance: '1.2 km',
        price: 300,
        crowd: 'medium',
        rating: "4.2",
        tags: ['wifi', 'work-friendly'],
        image: 'assets/images/cafe2.jpg'
      },
      {
        name: 'Byg Brewski',
        distance: '3 km',
        price: 1500,
        crowd: 'high',
        rating: "4.6",
        tags: ['party', 'rooftop'],
        image: 'assets/images/rooftop.jpg'
      },
      {
        name: 'Cafe Brew',
        distance: 1.2,
        price: 200,
        crowd: 'low',
        rating: 4.3,
        tags: ['Coffee', 'Snacks'],
        image: 'assets/images/cafe1.jpg',
      }
    ];
  }
}