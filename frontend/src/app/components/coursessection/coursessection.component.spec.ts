import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessectionComponent } from './coursessection.component';

describe('CoursessectionComponent', () => {
  let component: CoursessectionComponent;
  let fixture: ComponentFixture<CoursessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursessectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
