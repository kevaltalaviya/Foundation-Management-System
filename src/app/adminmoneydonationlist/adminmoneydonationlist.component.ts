import { Component, OnInit } from '@angular/core';
import MoneyDonation from '../class2';
import {MoneydonationService} from '../moneydonation.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminmoneydonationlist',
  templateUrl: './adminmoneydonationlist.component.html',
  styleUrls: ['./adminmoneydonationlist.component.css']
})
export class AdminmoneydonationlistComponent implements OnInit {
  moneyDonations: MoneyDonation[];
  constructor(private at:MoneydonationService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
  } 
  ngOnInit() {
    this.at.getMoneyDonations().subscribe((data: MoneyDonation[]) =>{
      this.moneyDonations = data;
    })
  }
}