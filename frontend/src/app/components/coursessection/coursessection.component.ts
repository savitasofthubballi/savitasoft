import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coursessection',
  imports: [],
  templateUrl: './coursessection.component.html',
  styleUrl: './coursessection.component.css'
})
export class CoursessectionComponent implements AfterViewInit{

  @ViewChild('coursecontainer') coursecontainer!: ElementRef<HTMLDivElement>;

  timerInterval : number = 10;

  scroll : any;

  ngAfterViewInit(): void {
    this.coursecontainer.nativeElement.scrollLeft = 100;
    this.scrollCard();
  }

  scrollCard(){
    this.scroll = setInterval(() => {
      this.coursecontainer.nativeElement.scrollBy({ left: 1, behavior: 'smooth' });
    }, this.timerInterval);
  }

  courseCardMouseEnter(){
    clearInterval(this.scroll);
  }

  courseCardMouseLeave(){
    this.scrollCard();
  }
}
