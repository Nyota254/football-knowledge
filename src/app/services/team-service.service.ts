import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teamsInterface } from "../interfaces/teamsInterface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  private _url:string = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  constructor(private _http:HttpClient) { }

  getTeams() : Observable<teamsInterface[]>{
    return this._http.get<teamsInterface[]>(this._url);
  }
}
