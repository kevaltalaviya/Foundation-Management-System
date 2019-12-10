import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BloodCampService} from '../blood-camp.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-adminaddevents',
  templateUrl: './adminaddevents.component.html',
  styleUrls: ['./adminaddevents.component.css']
})
export class AdminaddeventsComponent implements OnInit {

  bloodCampForm: FormGroup;
  constructor(private fb:FormBuilder,private bc: BloodCampService,private router:Router, private _route: Router, private _active: ActivatedRoute) 
  {
      if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
        this._route.navigate(['/adminlogin'], { relativeTo: this._active });
       }
    this.createFrom();
  }
   createFrom(){
    this.bloodCampForm = this.fb.group({
      camp_title: ['', Validators.required ],
      camp_date: ['', Validators.required ],
      camp_address: ['', Validators.required ],
      
    });
  }

  addCamp(camp_title, camp_date,camp_address){
    this.bc.addCamp(camp_title, camp_date,camp_address);
    this.router.navigate(['adminevents'])

  }
  ngOnInit() {
  }



}
