import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { SummercampregistrationService} from '../summercampregistration.service'
@Component({
  selector: 'app-summercampregistration',
  templateUrl: './summercampregistration.component.html',
  styleUrls: ['./summercampregistration.component.css']
})
export class SummercampregistrationComponent implements OnInit {

  summerCampRegisterForm: FormGroup;
  title: String;

  constructor(private fb:FormBuilder,   private route: ActivatedRoute, private router: Router,
    private scr:SummercampregistrationService) {
    this.createForm();
   }

  createForm(){
    this.summerCampRegisterForm = this.fb.group({
      firstname: ['', Validators.required ],
      middlename: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      age: ['', Validators.required ],
      gender: ['', Validators.required ],
      mobile_no: ['', Validators.required ]
    })
  }
  
  addsummercampregister(firstname,middlename,lastname,email,age,gender,mobile_no){

    this.scr.addsummercampregister(firstname,middlename,lastname,email,age,gender,mobile_no,this.title);
    alert("Summer Camp Registration Successfully");
    this.router.navigate(['home'])

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title=  params['title']
  });
    console.log(this.title)
  }
}
