import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from 'src/app/match-data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  singleMatchData: MatchData;

  homeTeamFlag: string;

  awayTeamFlag: string;

  humanReadadbleDate: string;

  constructor() { }

  ngOnInit() {
    this.homeTeamFlag = this.singleMatchData.homeTeam.flag;
    this.awayTeamFlag = this.singleMatchData.awayTeam.flag;
    console.log(this.homeTeamFlag);
    console.log(this.awayTeamFlag);

    const date = new Date(this.singleMatchData.dateTime);
   // alert(date.toDateString());
    console.log(date.toDateString());


  }

}
