import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  title = '';
  componentClasses = ['center'];

  pageData = [
    { name: 'ed', position: 'instructor' },
    { name: 'jesse', position: 'instructor' },
    { name: 'jay', position: 'TA' }
  ];



  constructor( private backend: BackendService ) {
  this.title = 'App title';
}

  ngOnInit() {
    this.backend.getCard()
    .then(res => {
      this.title = JSON.stringify(res);
    })
    .catch(err => {
      console.log(err);
    })

  }
}
