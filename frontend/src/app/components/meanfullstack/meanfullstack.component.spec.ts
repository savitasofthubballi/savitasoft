import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanfullstackComponent } from './meanfullstack.component';

describe('MeanfullstackComponent', () => {
  let component: MeanfullstackComponent;
  let fixture: ComponentFixture<MeanfullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeanfullstackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeanfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
