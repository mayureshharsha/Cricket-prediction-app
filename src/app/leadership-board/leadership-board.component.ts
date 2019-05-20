import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../matches.service';
import {PredictionData} from '../prediction-data';

@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.css']
})
export class LeadershipBoardComponent implements OnInit {

  predictionData: PredictionData;

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    console.log('inside onInit method');
    this.matchesService.getLeadershipBoard().subscribe(
      (predictionData: PredictionData) => {
        this.predictionData = predictionData;
        console.log(this.predictionData);

      }
    );

  }
}
