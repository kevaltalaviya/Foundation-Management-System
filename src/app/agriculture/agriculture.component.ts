import { Component, OnInit } from '@angular/core';
import AgroTool from '../classes';
import {AgroToolService} from '../agro-tool.service';
@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {

  agroTools: AgroTool[];
  
  constructor(private at:AgroToolService) { }

  ngOnInit() {
    console.log("onInit")
    this.at.getAgroTools().subscribe((data: AgroTool[]) =>{
      this.agroTools = data;
      alert("AgriCulture Tool is Successfully Added.");

    })
  }
  deleteAgroTool(id){
    this.at.deleteAgroTool(id).subscribe(res=>{
      alert("item is deleted.");
    })
  }
}
