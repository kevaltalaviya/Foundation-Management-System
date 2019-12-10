import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoneydonationService {
  uri = 'http://localhost:4000/moneydonation';
  constructor(private http:HttpClient) { }

  addMoney(firstname,middlename,lastname,email,mobile_no,bank_name,account_no,IFSC_no,amount)
    {
      const obj = {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        email: email,
        mobile_no: mobile_no,
        bank_name: bank_name,
        account_no: account_no,
        IFSC_no: IFSC_no,
        amount: amount,
    }
      console.log(obj);
      this.http.post(`${this.uri}`,obj).subscribe(res => console.log('Done'));
    }
    getMoneyDonations(){
      return this.http.get(`${this.uri}`);
    }
}
