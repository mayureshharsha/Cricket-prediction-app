import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AddonPrediction} from '../model/addonPrediction';

@Injectable({
  providedIn: 'root'
})
export class PredictionHistoryService {

  showMsg = true;

  constructor(private http: HttpClient) { }

  getPredictionHistory() {

    return this.http.get(environment.hostUrl + '/v1/predmgmt/predictionsByUser/' + JSON.parse(document.cookie).userId,
      {
        withCredentials: true,
        headers: {
          Token: document.cookie
        }
      });

  }

  saveAddonPrediction(addonPrediction: AddonPrediction) {
    return this.http.post(environment.hostUrl + '/v1/predmgmt/predictions/addonPrediction',
      addonPrediction,
      {
        withCredentials: true,
        headers: {
          Token: document.cookie
        }
      });
  }
}
