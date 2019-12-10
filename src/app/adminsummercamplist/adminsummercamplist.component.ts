import { Component, OnInit } from '@angular/core';
import SummerCampList from '../class4';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { SummercampregistrationService } from '../summercampregistration.service';
@Component({
  selector: 'app-adminsummercamplist',
  templateUrl: './adminsummercamplist.component.html',
  styleUrls: ['./adminsummercamplist.component.css']
})
export class AdminsummercamplistComponent implements OnInit {

  summerCampList:SummerCampList[];
  campTitle:String;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private sl: SummercampregistrationService,
    private fb: FormBuilder, private _route: Router, private _active: ActivatedRoute) {
      if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
        this._route.navigate(['/adminlogin'], { relativeTo: this._active });
     }
 }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sl.getSummerCampList(params['title']).subscribe((res:any) => {
        this.summerCampList = res;
        this.campTitle=params['title']
    });
  });
  }
}
