import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodCampService {

  uri = 'http://localhost:4000/blood-camp'; 

  
  constructor(private http: HttpClient) { }

  addCamp(camp_title, camp_date,camp_address){
    const obj = {
      camp_title: camp_title,
      camp_date: camp_date,
      camp_address: camp_address
    }
    console.log(obj);
    this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('Done'));
  }
  
  getBloodCamps() {
    return this.http.get(`${this.uri}`);
  }
}
