import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AgroToolService } from '../agro-tool.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminagrotools',
  templateUrl: './adminagrotools.component.html',
  styleUrls: ['./adminagrotools.component.css']
})
export class AdminagrotoolsComponent implements OnInit {

  imgurl:String=""
  fileToUpload:File=null;
  agroToolForm: FormGroup;


  constructor( private fb: FormBuilder,private at : AgroToolService,private router:Router, private _route: Router, private _active: ActivatedRoute) {
    if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
      this._route.navigate(['/adminlogin'], { relativeTo: this._active });
   }
    this.createFrom();
   }
   createFrom(){
    this.agroToolForm = this.fb.group({
      tool_name: ['', Validators.required ],
      tool_mrp: ['', Validators.required ],
      tool_discount: ['', Validators.required ],
      tool_sell_price: ['', Validators.required ],
      tool_address: ['', Validators.required ],
      tool_photo: ['', Validators.required ],
   
    });
  }
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl = event.target.result;
      console.log(this.imgurl)
    }
    reader.readAsDataURL(this.fileToUpload);

  }
  addAgroTool(tool_name, tool_mrp,tool_discount,tool_sell_price,tool_address){

    this.at.addAgroTool(tool_name, tool_mrp,tool_discount,tool_sell_price,tool_address,this.imgurl)
    this.router.navigate(['admingetagrotool'])

  }

  ngOnInit() {
  }

}
