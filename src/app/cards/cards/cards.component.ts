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

  constructor() { }

  ngOnInit() {
    this.homeTeamFlag = this.singleMatchData.homeTeam.flag;
    console.log(this.homeTeamFlag);
  }

}
