import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MoneydonationService} from '../moneydonation.service'
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-moneydonation',
  templateUrl: './moneydonation.component.html',
  styleUrls: ['./moneydonation.component.css']
})
export class MoneydonationComponent implements OnInit {

  moneydonationForm: FormGroup;
  constructor(private fb:FormBuilder,private sc:MoneydonationService,private router: Router) { 
    this.createFrom();
  }

  createFrom(){
    this.moneydonationForm = this.fb.group({
      firstname: ['', Validators.required ],
      middlename: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
    mobile_no: ['', Validators.required ],
    bank_name: ['', Validators.required ],
    account_no: ['', Validators.required ],
    IFSC_no: ['', Validators.required ],
    amount: ['', Validators.required ],
    });
  }
  addMoney(firstname,middlename,lastname,email,mobile_no,bank_name,account_no,IFSC_no,amount){

      this.sc.addMoney(firstname,middlename,lastname,email,mobile_no,bank_name,account_no,IFSC_no,amount);
      alert("Thank you  For your Donation")
      this.router.navigate(['home'])

    }
  ngOnInit() {
  }

}
