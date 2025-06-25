import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coursessection',
  imports: [],
  templateUrl: './coursessection.component.html',
  styleUrl: './coursessection.component.css'
})
export class CoursessectionComponent implements OnInit{

  @ViewChild('coursecontainer', { static: true }) courseContainer!: ElementRef;
  scrollInterval: any;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    this.scrollInterval = setInterval(() => {
      const container = this.courseContainer.nativeElement;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft) {
        // Reset to beginning
        container.scrollLeft = 0;
        this.pauseAutoScroll();
      } else {
        // Scroll forward
        container.scrollLeft += 1;
      }
    }, 20); // Adjust speed here
  }

  pauseAutoScroll(): void {
    clearInterval(this.scrollInterval);
  }

  resumeAutoScroll(): void {
    this.startAutoScroll();
  }
}
