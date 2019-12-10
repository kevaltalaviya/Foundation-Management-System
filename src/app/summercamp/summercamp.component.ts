import { Component, OnInit } from '@angular/core';
import SummerCamp from '../class2';
import {SummerCampService} from '../summer-camp.service';

@Component({
  selector: 'app-summercamp',
  templateUrl: './summercamp.component.html',
  styleUrls: ['./summercamp.component.css']
})
export class SummercampComponent implements OnInit {

  summerCamps: SummerCamp[];
  constructor(private at:SummerCampService) { }

  ngOnInit() {
    this.at.getSummerCamps().subscribe((data: SummerCamp[]) =>{
      this.summerCamps = data;
    })
  }

}
