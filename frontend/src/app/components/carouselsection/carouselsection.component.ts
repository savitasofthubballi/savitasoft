import { Component } from '@angular/core';

@Component({
  selector: 'app-carouselsection',
  imports: [],
  templateUrl: './carouselsection.component.html',
  styleUrl: './carouselsection.component.css'
})
export class CarouselsectionComponent {
  
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }
}
