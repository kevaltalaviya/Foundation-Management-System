import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {SummerCampService} from '../summer-camp.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-adminaddsummercamp',
  templateUrl: './adminaddsummercamp.component.html',
  styleUrls: ['./adminaddsummercamp.component.css']
})
export class AdminaddsummercampComponent implements OnInit {

  imgurl:String= null;
  fileToUpload:File=null;
  summerCampForm: FormGroup;
  constructor(private fb:FormBuilder,private sc:SummerCampService,private router:Router, private _route: Router, private _active: ActivatedRoute) 
  {
      if(localStorage.getItem('username')==null || localStorage.getItem('username')!='admin'){
        this._route.navigate(['/adminlogin'], { relativeTo: this._active });
       } 
    this.createFrom();
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
  createFrom(){
    this.summerCampForm = this.fb.group({
      camp_title: ['', Validators.required ],
       description: ['', Validators.required ],
        start_date: ['', Validators.required ],
        end_date: ['', Validators.required ],
    fee_amount: ['', Validators.required ],
    max_seat: ['', Validators.required ],
    min_age: ['', Validators.required ],
    max_age: ['', Validators.required ],
    last_date_to_reg: ['', Validators.required ],
    photo: ['', Validators.required ]
    });
  }
  addSummer(camp_title, description, start_date,end_date,
    fee_amount,max_seat,available_seat,min_age,max_age,last_date_to_reg){

      this.sc.addSummer(camp_title, description, start_date,end_date,
        fee_amount,max_seat,available_seat,min_age,max_age,last_date_to_reg,this.imgurl);
        this.router.navigate(['adminsummercamp'])
    }
  ngOnInit() {
  }

}
