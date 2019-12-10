import { Component, OnInit } from '@angular/core';
import AgroTool from '../classes';
import {AgroToolService} from '../agro-tool.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admingetagrotool',
  templateUrl: './admingetagrotool.component.html',
  styleUrls: ['./admingetagrotool.component.css']
})
export class AdmingetagrotoolComponent implements OnInit {

  agroTools: AgroTool[];
  
  constructor(private at:AgroToolService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
  } 

  ngOnInit() {
    console.log("onInit")
    this.at.getAgroTools().subscribe((data: AgroTool[]) =>{
      this.agroTools = data;
      
    })
  }
  deleteAgroTool(id){
    this.at.deleteAgroTool(id).subscribe(res=>{
      console.log("delete");
    })
  }
}
