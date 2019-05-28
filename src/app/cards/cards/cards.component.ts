import {Component, Input, OnInit} from '@angular/core';
import {MatchData} from 'src/app/model/match-data';
import {PredictionData} from '../../model/prediction-data';
import {MatchesService} from '../matches.service';
import {MessageService, SelectItem} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  singleMatchData: MatchData;

  @Input()
  disabled: boolean;

  predictionResult: PredictionData;

  homeTeamFlag: string;


  results: any[];

  awayTeamFlag: string;

  humanReadadbleDate: string;
  display: boolean;
  players: any[];
  mom: any;
  teams: SelectItem[];
  isLoaded = true;

  constructor(private matchService: MatchesService, private router: Router, private messageService: MessageService) {

    this.predictionResult = {} as PredictionData;

    this.players = [
      {name: 'Virat Kohli', code: 'NY'},
      {name: 'M S Dhoni', code: 'RM'},
      {name: 'Rohit Sharma', code: 'LDN'},
      {name: 'hardik Pandya', code: 'IST'},
      {name: 'Bhuvnesh Kumar', code: 'PRS'},
      {name: 'Bhuvnesh Kumar', code: 'PRS'},
      {name: 'Bhuvnesh Kumar', code: 'PRS'},
      {name: 'Bhuvnesh Kumar', code: 'PRS'},
      {name: 'Bhuvnesh Kumar', code: 'PRS'}
    ];


    this.results = [
      {name: 'YES', code: 'YES'},
      {name: 'NO', code: 'NO'}
    ];
  }

  ngOnInit() {
    this.teams = [
      {
        label: "Select a value", value: null,
      },
      {
        label: this.singleMatchData.homeTeam.name, value: 'W',
      },
      {
        label: this.singleMatchData.awayTeam.name, value: 'L',
      }
    ];


    this.homeTeamFlag = '/assets/' + this.singleMatchData.homeTeam.name + '.png';
    this.awayTeamFlag = '/assets/' + this.singleMatchData.awayTeam.name + '.png';
    const date = new Date(this.singleMatchData.dateTime);
    this.humanReadadbleDate = date.toLocaleDateString();
  }

  predict() {
    console.log('inside predict');
    this.display = true;
  }

  saveResult() {
    this.isLoaded = false;
    console.log('Inside Save Result');
    this.display = false;

    this.predictionResult.matchId = this.singleMatchData.matchId;
    this.predictionResult.userId = JSON.parse(document.cookie).userId;
    this.predictionResult.tossResult = this.predictionResult.tossResult.value;
    this.matchService.savePredictionData(this.predictionResult).subscribe(
      (response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Leadership board successfully updated',
          detail: 'Success'
        });
        this.isLoaded = true;
        console.log('Successfully posted Data');
         this.router.navigateByUrl('/home');

      }, error1 => {
        this.isLoaded = true;
        this.messageService.add({
          severity: 'error',
          summary: 'Something Went Wrong'
        });
      }
    );
  }
}
