import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTasks } from './dashboard-tasks';

describe('DashboardTasks', () => {
  let component: DashboardTasks;
  let fixture: ComponentFixture<DashboardTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
