import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PredictionData} from '../model/prediction-data';
import {Observable} from 'rxjs';
import {LeadershipBoard} from '../model/leadership-board';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MatchesService {


  matchDataUrl = 'https://raw.githubusercontent.com/mayureshharsha/cricpred/master/Data_Matches.json';


  constructor(private http: HttpClient) {
  }

  getAllMatchData() {
    console.log(this.http.get(this.matchDataUrl));
    return this.http.get(this.matchDataUrl);
  }

  savePredictionData(predictionData: PredictionData) {
    console.log(predictionData);
    return this.http.post(environment.hostUrl+'/v1/predmgmt/predictions',
      predictionData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  }

  getLeadershipBoard(): Observable<LeadershipBoard[]> {
    console.log('leaderShip board');
    return this.http.get<LeadershipBoard[]>('http://localhost:8087/leadershipBoard');

  }

}
