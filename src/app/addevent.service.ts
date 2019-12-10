import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddeventService {
  constructor(private http: HttpClient) {  }
    addevent(data) {
      console.log(data.event_name);
      return this.http.post("http://localhost:3000/addevent", data);
    }

}

