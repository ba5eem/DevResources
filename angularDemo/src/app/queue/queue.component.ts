import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  cards: any[] = []

  clickMessage = '';

  constructor( private backend: BackendService ) { }

  ngOnInit() {
    this.backend.getCard()
    .then(res => {
      this.cards = res;
    });

  }

  onClickMe(card) {
    this.clickMessage = 'Clicked'
    console.log(card);
  }

}
