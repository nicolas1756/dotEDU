import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  imports: [],
  templateUrl: './error-page.html',
  styleUrl: './error-page.css',
})
export class ErrorPage {
  errorMessage: string = 'The requested page could not be found.';
  errorCode: string = '404';
}
