import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {


  matchDataUrl: string = 'https://raw.githubusercontent.com/mayureshharsha/cricpred/master/Data_Matches.json';

  constructor(private http: HttpClient) {
  }

  getAllMatchData() {
    return this.http.get(this.matchDataUrl);
  }

}


