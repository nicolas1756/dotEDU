import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Footer, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLElement>;
  @ViewChildren('courseCard') courseCardRefs!: QueryList<ElementRef<HTMLElement>>;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  activeIndex = 1;

  popularCourses = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80',
      title: 'Introduction to Programming',
      description: 'Build a strong foundation in Python and learn how to solve real-world coding problems.',
      color: '#5a2d2d',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      title: 'Web Development Bootcamp',
      description: 'Create modern, responsive websites with HTML, CSS, JavaScript, and React.',
      color: '#f2b2fe',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      title: 'Data Science Essentials',
      description: 'Explore statistics, data visualization, and machine learning with practical examples.',
      color: '#24632b',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn how to design intuitive interfaces and delightful user experiences.',
      color: '#2c2c5c',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      title: 'Digital Marketing Strategy',
      description: 'Master content marketing, SEO, and analytics to grow online audiences.',
      color: '#6d2c6d',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      title: 'Cybersecurity Basics',
      description: 'Understand online threats, secure systems, and protect sensitive information.',
      color: '#713434',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      title: 'Artificial Intelligence for Beginners',
      description: 'Discover AI concepts, tools, and practical applications without the jargon.',
      color: '#24632b',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
      title: 'Productivity with Notion',
      description: 'Use Notion to organize projects, study plans, and daily workflows more effectively.',
      color: '#2c2c5c',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      title: 'Leadership & Teamwork',
      description: 'Develop the communication and collaboration skills needed in modern teams.',
      color: '#6d2c6d',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      title: 'Cloud Computing Foundations',
      description: 'Learn the basics of cloud platforms, deployment, and scalable application design.',
      color: '#8d4343',
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
}

