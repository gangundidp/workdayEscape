import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-card.html',
  styleUrls: ['./place-card.scss']
})
export class PlaceCard {
  @Input() place: any;

  onImageError(event: any) {
    event.target.src = 'assets/images/cafe1.jpg';
  }

  formatDistance(distance: number): string {
    return distance < 1
      ? `${Math.round(distance * 1000)} m`
      : `${distance.toFixed(1)} km`;
  }
}