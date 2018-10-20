import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = '';
  componentClasses = ['center'];

  pageData = [
    { name: 'ed', position: 'instructor' },
    { name: 'jesse', position: 'instructor' },
    { name: 'jay', position: 'TA' }
  ];

  constructor() {
    this.title = 'App title';
  }
}
