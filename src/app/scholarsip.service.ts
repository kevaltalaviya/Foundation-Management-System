import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {
  uri = 'http://localhost:4000/scholarship';
  constructor(private http:HttpClient) { }
  addScholarship(firstname,middlename,lastname,email,mobile_no,gender,dob,pincode,city,bank_name,account_no,IFSC_no,percentage,marksheet,approve:Boolean = false)
    {
      const obj = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        email: email,
        mobile_no: mobile_no,
        gender: gender,
        dob: dob,
        pincode: pincode,
        city: city,
        bank_name: bank_name,
        account_no:account_no,
        IFSC_no:IFSC_no,
        percentage:percentage,
        marksheet:marksheet,
        approve:approve
      }
      console.log(obj);
      this.http.post(`${this.uri}/add`,obj).subscribe(res => console.log('Done'));
      
    }

    getScholarship(){
      return this.http.get(`${this.uri}`);
    }
    approveST(id,email){    
      const obj = {
      email:email
    };
    this.http
    .post(`${this.uri}/approve/${id}`, obj)
    .subscribe(res => console.log('Done'));
                
    }
}
