import { Component, OnInit } from '@angular/core';
import SummerCamp from '../class2';
import {SummerCampService} from '../summer-camp.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminsummercamp',
  templateUrl: './adminsummercamp.component.html',
  styleUrls: ['./adminsummercamp.component.css']
})
export class AdminsummercampComponent implements OnInit {
  summerCamps: SummerCamp[];
  constructor(private at:SummerCampService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
  } 
  ngOnInit() {
    this.at.getSummerCamps().subscribe((data: SummerCamp[]) =>{
      this.summerCamps = data;
    })
  }
}
