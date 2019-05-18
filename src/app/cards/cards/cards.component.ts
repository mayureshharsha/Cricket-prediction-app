import {Component, Input, OnInit} from '@angular/core';
import {MatchData} from 'src/app/match-data';
import {PredictionData} from '../../prediction-data';
import {MatchesService} from "../../matches.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  singleMatchData: MatchData;

  homeTeamFlag: string;

  homeTeamResult: string;

  results: any[];

  awayTeamFlag: string;

  humanReadadbleDate: string;
  display: boolean;

  constructor(private matchService : MatchesService) {

    this.results = [
      {name: 'YES', code: 'YES'},
      {name: 'NO', code: 'NO'}
    ];
  }

  ngOnInit() {

    this.homeTeamFlag = this.singleMatchData.homeTeam.flag;
    this.awayTeamFlag = this.singleMatchData.awayTeam.flag;
    console.log(this.homeTeamFlag);
    console.log(this.awayTeamFlag);

    const date = new Date(this.singleMatchData.dateTime);
    // alert(date.toDateString());
    this.humanReadadbleDate = date.toLocaleDateString();
    console.log(date.toDateString());


  }

  predict() {
    console.log('inside predict');
    this.display = true;
  }

  saveResult() {
    console.log('Inside Save Result');
    this.display = false;

    const predictionResult: PredictionData = {
      userId: '1',
      homeResult: 'win',
      matchId: 1,
      tossKaBoss: 'India',
      manOfTheMatch: 'Virat'
    };

    this.matchService.savePredictionData(predictionResult).subscribe(
      ( response : any) => {
        console.log('Successfully posted Data');
      }
    );
  }
}
