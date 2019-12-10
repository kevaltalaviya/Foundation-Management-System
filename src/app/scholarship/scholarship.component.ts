import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ScholarshipService} from '../scholarsip.service';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {
  imgurl:String=""
  fileToUpload:File=null;
  scholarshipForm: FormGroup;
  constructor(private fb:FormBuilder,private sc:ScholarshipService, private router: Router) { 
    this.createFrom();
  }

  createFrom(){
    this.scholarshipForm = this.fb.group({
      firstname: ['', Validators.required ],
      middlename: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
    mobile_no: ['', Validators.required ],
    gender: ['', Validators.required ],
    dob: ['', Validators.required ],
    pincode: ['', Validators.required ],
    city: ['', Validators.required ],
    bank_name: ['', Validators.required ],
    account_no: ['', Validators.required ],
    IFSC_no: ['', Validators.required ],
    percentage: ['', Validators.required ],
    marksheet: ['', Validators.required ],
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

  addScholarship(firstname,middlename,lastname,email,mobile_no,gender,dob,pincode,city,bank_name,account_no,IFSC_no,percentage,){

      this.sc.addScholarship(firstname,middlename,lastname,email,mobile_no,gender,dob,pincode,city,bank_name,account_no,IFSC_no,percentage,this.imgurl);
      alert("Your request SuccessFully added.");
      this.router.navigate(['home'])


    }
  ngOnInit() {
  }

}
