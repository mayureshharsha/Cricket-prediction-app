import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionHistoryService {

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
}
