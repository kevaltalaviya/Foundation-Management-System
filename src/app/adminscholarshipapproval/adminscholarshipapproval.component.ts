import { Component, OnInit } from '@angular/core';
import Scholarship from '../classScholar';
import { ScholarshipService} from '../scholarsip.service';
import ScholarShip from '../classScholar';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminscholarshipapproval',
  templateUrl: './adminscholarshipapproval.component.html',
  styleUrls: ['./adminscholarshipapproval.component.css']
})
export class AdminscholarshipapprovalComponent implements OnInit {

  scholarships:Scholarship[];

  constructor(private sc:ScholarshipService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });

  }
 }

  ngOnInit() {
    this.sc.getScholarship().subscribe((data:ScholarShip[]) =>{
      this.scholarships = data;

    })
  }
  approveST(id,email){
	alert("Your request SuccessFully added.");
    this.sc.approveST(id,email)
  }
}
