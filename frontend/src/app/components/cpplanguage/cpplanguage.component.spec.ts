import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpplanguageComponent } from './cpplanguage.component';

describe('CpplanguageComponent', () => {
  let component: CpplanguageComponent;
  let fixture: ComponentFixture<CpplanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpplanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpplanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
