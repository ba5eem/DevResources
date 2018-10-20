import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [];

  constructor() { }

  getUsers() { return this.users; }
}
