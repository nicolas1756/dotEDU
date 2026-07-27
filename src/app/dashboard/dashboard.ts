import { Component, model} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { signal, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLinkActive, CommonModule, RouterLink, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard  implements OnInit, OnDestroy {
  activeLink: string = '/home';
  selected = model<Date | null>(null);

  constructor(private router: Router) {}
  currentTime = signal(new Date());
  private intervalId: any;

  protected theme: 'default' | 'professional' = 'default';

  toggleTheme(): void {
    this.theme = this.theme === 'default' ? 'professional' : 'default';
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Critical to prevent memory leaks
    }
  }
}
