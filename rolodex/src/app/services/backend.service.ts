import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  baseUrl: string = 'http://localhost:8080';
  cards: any[] = []

  constructor(private http: HttpClient) { }

    getCard(){
      const url = this.baseUrl + '/';
      return this.http.get(url).toPromise()
      .then(res => {
        this.cards = res['data'];
        return this.cards;
      })
    };

    addCard(){
      const url = this.baseUrl + '/';
      return this.http.get(url).toPromise();
    };

};