import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-mission',
  imports: [Header, Footer],
  templateUrl: './mission.html',
  styleUrl: './mission.css',
})
export class Mission {}
