import { Component, OnInit } from '@angular/core';
import BloodCamp from '../class1';
import {BloodCampService} from '../blood-camp.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrls: ['./adminevents.component.css']
})
export class AdmineventsComponent implements OnInit {
  bloodCamps: BloodCamp[];
  constructor(private at:BloodCampService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
  } 
  ngOnInit() {
    this.at.getBloodCamps().subscribe((data: BloodCamp[]) =>{
      this.bloodCamps = data;
    })
  }
}
