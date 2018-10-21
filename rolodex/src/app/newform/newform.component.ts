import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  formData: {
    name: string,
    email: string
  } = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
