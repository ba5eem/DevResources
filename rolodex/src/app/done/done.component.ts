import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  cards = [
  {title: 'Eat Lunch'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
