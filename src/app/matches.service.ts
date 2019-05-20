import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PredictionData} from "./prediction-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatchesService {


  matchDataUrl = 'https://raw.githubusercontent.com/mayureshharsha/cricpred/master/Data_Matches.json';


  constructor(private http: HttpClient) {
  }

  getAllMatchData() {
    console.log(this.http.get(this.matchDataUrl))
    return this.http.get(this.matchDataUrl);
  }

  savePredictionData(predictionData: PredictionData) {
    console.log(predictionData);
    return this.http.post('/testUrl', predictionData);

  }

   getLeadershipBoard(): Observable<PredictionData> {
    console.log('leaderShip board');
    return this.http.get<PredictionData>('http://localhost:8087/userDetails');

  }

}


