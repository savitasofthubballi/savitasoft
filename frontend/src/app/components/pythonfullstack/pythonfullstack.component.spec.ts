import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonfullstackComponent } from './pythonfullstack.component';

describe('PythonfullstackComponent', () => {
  let component: PythonfullstackComponent;
  let fixture: ComponentFixture<PythonfullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonfullstackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
