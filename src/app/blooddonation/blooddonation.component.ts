import { Component, OnInit } from '@angular/core';
import BloodCamp from '../class1';
import {BloodCampService} from '../blood-camp.service';
@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css']
})
export class BlooddonationComponent implements OnInit {

  bloodCamps: BloodCamp[];
  constructor(private at:BloodCampService) { }

  ngOnInit() {
    this.at.getBloodCamps().subscribe((data: BloodCamp[]) =>{
      this.bloodCamps = data;

    })
  }

}
