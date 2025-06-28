import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanguageComponent } from './clanguage.component';

describe('ClanguageComponent', () => {
  let component: ClanguageComponent;
  let fixture: ComponentFixture<ClanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
