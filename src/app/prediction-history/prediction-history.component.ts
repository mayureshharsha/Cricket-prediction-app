import {Component, OnInit} from '@angular/core';
import {PredictionHistoryService} from './prediction-history.service';
import {PredictionHistory} from '../model/prediction-history';
import {MessageService} from 'primeng/api';
import {LoginService} from '../user-management/login/login.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MatchesService} from '../cards/matches.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-prediction-history',
  templateUrl: './prediction-history.component.html',
  styleUrls: ['./prediction-history.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class PredictionHistoryComponent implements OnInit {

  predictionHistory: PredictionHistory[];
  totalPoints = 0;
  cols: any[];

  constructor(private predictionHistoryService: PredictionHistoryService,
              private messageService: MessageService,
              private loginService: LoginService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,
              private matchesService: MatchesService) {
  }

  ngOnInit() {
    this.ng4LoadingSpinnerService.show();
    this.predictionHistoryService.getPredictionHistory().subscribe(
      (predictionHistory: PredictionHistory[]) => {
        this.ng4LoadingSpinnerService.hide();
        predictionHistory.sort(this.compare);
        this.predictionHistory = predictionHistory;

        this.messageService.add({
          severity: 'success',
          summary: 'Updated'
        });

      }, error1 => {
        this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: 'Unable to fetch '});
        this.ng4LoadingSpinnerService.hide();
        console.log(error1);
      }
    );

    this.cols = [
      { field: 'matchId', header: 'Match number' },
      { field: 'homeTeam', header: 'Home Team' },
      { field: 'awayTeam', header: 'Away Team' },
      { field: 'points', header: 'Points' }
    ];

    this.matchesService.getPointsOfUser(JSON.parse(document.cookie).userId).subscribe(value => {
      this.totalPoints = value;
    });
  }

  compare(a, b) {
    if (a.matchId > b.matchId) {
      return -1;
    }
    if (a.matchId < b.matchId) {
      return 1;
    }
    return 0;
  }

  getPredictionMatchWinner(pHistory) {
    const homeResult = pHistory.homeResult;
    const team = this.extracted(homeResult, pHistory);
    if (team == null) {
      return '--';
    }
    return team;
  }

  getActualMatchWinner(pHistory) {
    const homeResult = pHistory.match.homeResult;
    const team = this.extracted(homeResult, pHistory);
    if (team == null) {
      return '--';
    }
    return team;
  }

  getPredictionTossWinner(pHistory) {
    const homeResult = pHistory.tossResult;
    const team = this.extracted(homeResult, pHistory);
    if (team == null) {
      return '--';
    }
    return team;
  }

  getActualTossWinner(pHistory) {
    const homeResult = pHistory.match.tossResult;
    const team = this.extracted(homeResult, pHistory);
    if (team == null) {
      return '--';
    }
    return team;
  }

  private extracted(homeResult, pHistory) {
    if (homeResult === 'W') {
      return pHistory.match.homeTeam.name;
    } else if (homeResult === 'L') {
      return pHistory.match.awayTeam.name;
    } else if (homeResult === 'D') {
      return 'Draw';
    } else {
      return null;
    }
  }

  calculate(pHistory) {
    let sum = 0;
    if (pHistory.match.homeResult == null) {
      return '--';
    }
    if (pHistory.match.homeResult === pHistory.homeResult) {
      sum += 100;
    }
    if (pHistory.homeResult === null) {
      sum -= 100;
    } else if (pHistory.homeResult !== pHistory.match.homeResult) {
      sum -= 50;
    }
    if (pHistory.match.tossResult === null) {
      sum += 0;
    } else if (pHistory.tossResult === null) {
      sum -= 50;
    } else if (pHistory.tossResult !== pHistory.match.tossResult) {
      sum -= 25;
    }
    if (pHistory.tossResult === pHistory.match.tossResult) {
      sum += 50;
    }

    if (pHistory.match.momResult !== null && pHistory.momResult === pHistory.match.momResult) {
      sum += 200;
    }

    if (sum === 350) {
      sum += 250;
    }
    return sum;
  }
}
