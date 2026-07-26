import { Component, AfterViewInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-credits',
  imports: [Header, Footer],
  templateUrl: './credits.html',
  styleUrl: './credits.css',
})
export class Credits implements AfterViewInit {
  protected readonly Array = Array;

  ngAfterViewInit() {
    document.querySelectorAll('.star').forEach((star) => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const randomSize = Math.random() * 20 + 50;

      star.setAttribute('style', `left: ${randomX}px; visibility: visible; transform: rotate(${Math.random() * 360}deg); top: ${randomY}px; width: ${randomSize}px; height: ${randomSize}px;`);
    });
  }
}
