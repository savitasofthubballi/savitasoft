import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsectionComponent } from './carouselsection.component';

describe('CarouselsectionComponent', () => {
  let component: CarouselsectionComponent;
  let fixture: ComponentFixture<CarouselsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
