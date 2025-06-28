import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MernfullstackComponent } from './mernfullstack.component';

describe('MernfullstackComponent', () => {
  let component: MernfullstackComponent;
  let fixture: ComponentFixture<MernfullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MernfullstackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MernfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
