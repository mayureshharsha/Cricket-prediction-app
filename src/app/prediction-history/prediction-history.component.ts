import {Component, OnInit} from '@angular/core';
import {PredictionHistoryService} from './prediction-history.service';
import {PredictionHistory} from '../model/prediction-history';
import {MessageService} from 'primeng/api';
import {LoginService} from '../user-management/login/login.service';

@Component({
  selector: 'app-prediction-history',
  templateUrl: './prediction-history.component.html',
  styleUrls: ['./prediction-history.component.css']
})
export class PredictionHistoryComponent implements OnInit {

  predictionHistory: PredictionHistory[];
  totalPoints = 0;


  constructor(private predictionHistoryService: PredictionHistoryService,
              private messageService: MessageService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.predictionHistoryService.getPredictionHistory().subscribe(
      (predictionHistory: PredictionHistory[]) => {
        this.predictionHistory = predictionHistory;
        console.log(this.predictionHistory);


        this.predictionHistory.forEach(value => {
            this.totalPoints = this.totalPoints + value.points;

          }
        );
        this.messageService.add({
          severity: 'success',
          summary: 'Total Points ' + this.totalPoints
        });

      }, error1 => {
        this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: 'Unable to fetch '});

        console.log(error1);
      }
    );
  }

}
