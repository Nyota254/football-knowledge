import { Component, OnInit } from '@angular/core';
import { AllSportsService } from '../services/all-sports.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  p: number = 1;
  public allsports = []

  constructor(private _allSportsSevice:AllSportsService) { }

  ngOnInit() {

    this._allSportsSevice.getSports().subscribe(data => {this.allsports = data['sports']});

  }

}
