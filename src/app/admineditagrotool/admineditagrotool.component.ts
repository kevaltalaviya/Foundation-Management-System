import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { AgroToolService } from '../agro-tool.service';

@Component({
  selector: 'app-admineditagrotool',
  templateUrl: './admineditagrotool.component.html',
  styleUrls: ['./admineditagrotool.component.css']
})
export class AdmineditagrotoolComponent implements OnInit {

  agroTool:any ={};
  agroForm: FormGroup;


  imgurl:String=""
  fileToUpload:File=null;
  agroToolForm: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private at: AgroToolService,
              private fb: FormBuilder,private _route: Router, private _active: ActivatedRoute) {
              if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
                this._route.navigate(['/adminlogin'], { relativeTo: this._active });
             }

      this.createForm();
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

  createForm(){
    this.agroForm = this.fb.group({
      tool_name: ['', Validators.required ],
      tool_mrp: ['', Validators.required ],
      tool_discount: ['', Validators.required ],
      tool_sell_price: ['', Validators.required ],
      tool_address: ['', Validators.required ],
      tool_photo: [''],
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.at.editAgroTool(params['id']).subscribe(res => {
        this.agroTool = res;this.imgurl =this.agroTool.tool_photo;
    });
  });
  
  }
  updateAgroTool(tool_name,tool_mrp,tool_discount,tool_sell_price,tool_address){
    this.route.params.subscribe(params =>{
      this.at.updateAgroTool(tool_name,tool_mrp,tool_discount,tool_sell_price,tool_address,this.imgurl,params['id'])
    });
    this.router.navigate(['admingetagrotool'])

    }

}
