import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-bar.html',
  styleUrls: ['./filter-bar.scss']
})
export class FilterBar {
  @Output() filtersChanged = new EventEmitter();

  filters = {
    area: '',
    time: ''
  };

  applyFilters() {
    this.filtersChanged.emit(this.filters);
  }
}