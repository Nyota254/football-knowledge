import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../services/team-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams : any[];

  constructor(private _teamService:TeamServiceService) { }

  ngOnInit() {

    this._teamService.getTeams().subscribe(data => {this.teams = data['teams'],console.log(this.teams)});
    // this._teamService.getTeams().subscribe(data => console.log(data['teams']));
  }

}
