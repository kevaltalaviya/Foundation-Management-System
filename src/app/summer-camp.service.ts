import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SummerCampService {
  uri = 'http://localhost:4000/summer-camp';
  constructor(private http:HttpClient) { }

  addSummer(camp_title, description, start_date,end_date,
    fee_amount,max_seat,available_seat,min_age,max_age,last_date_to_reg,photo)
    {
      const obj = {
        camp_title: camp_title,
        description: description,
        start_date: start_date,
        end_date: end_date,
        fee_amount: fee_amount,
        max_seat: max_seat,
        available_seat: available_seat,
        min_age: min_age,
        max_age: max_age,
        last_date_to_reg: last_date_to_reg,
        photo:photo
      }
      console.log(obj);
      this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('Done'));
      
    }
    
  getSummerCamps() {
    return this.http.get(`${this.uri}`);
  }
}
