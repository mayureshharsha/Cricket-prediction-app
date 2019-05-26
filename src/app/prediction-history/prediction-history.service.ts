import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionHistoryService {

  constructor(private http: HttpClient) { }

  getPredictionHistory() {

    return this.http.get('http://localhost:8088/prediction-history');

  }
}
