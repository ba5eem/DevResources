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


  }

  onClickMe(card) {
    this.clickMessage = 'Clicked'
    console.log(card);
  }

}
