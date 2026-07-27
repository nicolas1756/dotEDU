import { AfterViewInit, afterNextRender, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLElement>;
  @ViewChildren('courseCard') courseCardRefs!: QueryList<ElementRef<HTMLElement>>;
  protected readonly Array = Array;
  constructor(@Inject(PLATFORM_ID) private readonly platformId: object, private readonly router: Router){
    // This hook runs safely ONLY in the browser after the page renders
    afterNextRender(() => {
      const element = document.querySelector('.hero') as HTMLElement;
      if (!element) return; // Guard clause in case element isn't found yet

      document.querySelectorAll('.star').forEach((star) => {
        const randomX = Math.random() * element.offsetWidth;
        const randomY = Math.random() * element.offsetHeight + 200;
        const randomSize = Math.random() * 5 + 15;

        star.setAttribute(
          'style', 
          `left: ${randomX}px; visibility: visible; transform: rotate(${Math.random() * 360}deg); top: ${randomY}px; width: ${randomSize}px; height: ${randomSize}px;`
        );
      });
    });
  }



  activeIndex = 1;

  pricingPlans = [
    {
      title: 'Free Plan',
      price: '$0',
      features: ['Access to all features', 'Limited to 10 students, 3 teachers, and 1 administrator', 'limited to 10GB of storage'],
    },
    {
      title: 'Pro Plan',
      price: '$250',
      features: ['Limited to 100 students, 20 teachers, and 5 administrator', 'Priority support', 'limited to 200GB of storage'],
    },
    {
      title: 'Max Plan',
      price: '$500',
        features: ['Limited to 500 students, 100 teachers, and 10 administrator', 'Priority support', 'limited to 500GB of storage'],
    },
    {
      title: 'Enterprise Plan',
      price: '$2500',
      features: ['Limited to 3000 students, 500 teachers, and 30 administrator', 'Dedicated support', 'Limited to 4TB of storage'],
      color: '#2e772e',
    },
  ];

  popularCourses = [
    {
      imageUrl: 'https://image.groundwork.one/articles/affordable/canvas-lms.png',
      title: 'Upload and manage your own courses',
      description: 'Easily upload and organize your courses with our intuitive course management system.',
      color: '#77342e',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy53wo68EuBHO8NSrPT7DMmUc9IUI04oMFv2Bk0DAaV9crrJF-89H48vqF&s=10',
      title: 'Video conferencing for live classes',
      description: 'Built in video conferencing allows you to conduct virtual classes and interact with students in real-time.',
      color: '#2d4283',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ec8pPq5juoBCXZ7c65y-elRF5SHX5OyJyN8dDn6BHDu8aNFhPdwEgRek&s=10',
      title: 'Calendar and scheduling for classes',
      description: 'Manage class schedule and set reminders with our easy-to-use calendar.',
      color: '#2e772e',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjx8_KD2_k-YHpeeA080iMeCuqdJ3Vb9rpRhH4hLKyQWbJq-QUceRgUg&s=10',
      title: 'File editor for course content',
      description: 'A built-in. simple to use file editor, capable of editing a variety of file types, allows you to create and edit course content directly within the platform.',
      color: '#5cb8ed',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1536925155833-43e9c2b2f499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Intuitive UI/UX design for better learning',
      description: 'Our user-friendly interface and design ensures a smooth and engaging learning experience for students.',
      color: '#773d2e',
    },
  ];


  scrollToRelativeCard(delta: number): void {
    const nextIndex = Math.min(Math.max(this.activeIndex + delta, 0), this.popularCourses.length - 1);
    this.scrollToCard(nextIndex);
  }

  scrollToCard(index: number): void {
    const card = this.courseCardRefs.get(index)?.nativeElement;

    if (!card) {
      return;
    }

    this.activeIndex = index;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  scrollToPlans(){
    document.getElementById('pricingPlans')?.scrollIntoView({ behavior: 'smooth' });
  }


}

