import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
  }
  ngOnInit() {
  }
  logout()
  {
    var uri="http:/localhost:4200/adminlogin"
    console.log('here'); 
    console.log(localStorage.getItem('username'));
    localStorage.removeItem("username");
      console.log(localStorage.getItem('username'));
    Response.redirect(`${uri}`);
  }
}