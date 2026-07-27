import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  imports: [CommonModule],
  templateUrl: './percentage-bar.html',
  styleUrl: './percentage-bar.css',
})
export class PercentageBar {
  @Input() value: number = 0; // Current progress value
  @Input() max: number = 100;  // Maximum capacity
}
