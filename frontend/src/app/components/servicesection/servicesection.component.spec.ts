import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesectionComponent } from './servicesection.component';

describe('ServicesectionComponent', () => {
  let component: ServicesectionComponent;
  let fixture: ComponentFixture<ServicesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
