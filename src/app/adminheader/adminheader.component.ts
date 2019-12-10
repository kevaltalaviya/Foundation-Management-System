import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private _route: Router, private _active: ActivatedRoute) {
        
    }
  ngOnInit() {
  }

}
