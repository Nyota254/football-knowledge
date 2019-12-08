import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SportsMainInterface } from '../interfaces/sports';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSportsService {

  private _url:string = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';

  constructor(private http:HttpClient) { }

  getSports(): Observable<SportsMainInterface[]> {
    return this.http.get<SportsMainInterface[]>(this._url);
  }

}
