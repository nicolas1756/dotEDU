import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('.EDU');
  protected theme: 'default' | 'professional' = 'default';

  toggleTheme(): void {
    this.theme = this.theme === 'default' ? 'professional' : 'default';
  }
}
