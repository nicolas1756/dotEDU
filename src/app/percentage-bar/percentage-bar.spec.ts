import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageBar } from './percentage-bar';

describe('PercentageBar', () => {
  let component: PercentageBar;
  let fixture: ComponentFixture<PercentageBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageBar],
    }).compileComponents();

    fixture = TestBed.createComponent(PercentageBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
