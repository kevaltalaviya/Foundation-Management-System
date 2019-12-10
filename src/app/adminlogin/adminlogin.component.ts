import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminloginService} from '../adminlogin.service';
import { from, empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  ispassword: boolean;
  myform: FormGroup;
  data: object;
  constructor(private _my: AdminloginService, private _route: Router, private _active: ActivatedRoute) {
    this.myform = new FormGroup(
      {
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }
  ngOnInit() {
  }
  adminlogin(email,pass)
  {
    if (this.myform.valid)
     {
       console.log(this.myform.value)
      this._my.adminlogin(this.myform.value).subscribe(
        data => { this.data = data ;}
      );
      if (this.data != null)
       {
		   const object=this.data;
   	    localStorage.clear();
        localStorage.setItem('username','admin');
        //localStorage.setItem('token', this.data.toString());
        this._route.navigate(['/adminhome'], { relativeTo: this._active });
      }
      else
       {
        this.ispassword = true;
      }
    }
  }
}
