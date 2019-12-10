import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SummercampregistrationService {

  uri = 'http://localhost:4000/summercampregistration';
  constructor(private http:HttpClient) { }
  addsummercampregister(firstname,middlename,lastname,email,age,gender,mobile_no,title)
    {
      const obj = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        email: email,
        age: age,
        gender: gender,
        mobile_no: mobile_no,
        title:title
      }
      console.log(obj);
      this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('Done'));
    }

    getSummerCampList(title){
      return this.http.get(`${this.uri}/get/${title}`);
    
    }
}
