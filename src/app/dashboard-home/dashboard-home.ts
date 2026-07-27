import { Component } from '@angular/core';
import { PercentageBar } from '../common/percentage-bar/percentage-bar';
@Component({
  selector: 'app-dashboard-home',
  imports: [PercentageBar],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {}
