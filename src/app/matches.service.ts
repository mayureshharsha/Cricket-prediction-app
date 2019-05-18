import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PredictionData} from "./prediction-data";

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

  savePredictionData(predictionData: PredictionData) {
    console.log(predictionData);
    return this.http.post('/testUrl', predictionData);

  }

}


