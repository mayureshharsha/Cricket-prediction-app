import {Component, OnInit} from '@angular/core';
import {MatchesService} from 'src/app/cards/matches.service';
import {MatchData} from 'src/app/model/match-data';
import {MessageService} from 'primeng/api';
import {PredictionHistoryService} from '../../prediction-history/prediction-history.service';
import {Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import enumerate = Reflect.enumerate;


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  matchData: MatchData[];
  filteredMatchData: MatchData[];
  matchIds: number[] = [];
  showMathes: number[] = [];
  constructor(private predictionByUser: PredictionHistoryService,
              private matchesService: MatchesService, private messageService: MessageService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
  }


  ngOnInit() {
    this.ng4LoadingSpinnerService.show();
    this.predictionByUser.getPredictionHistory()
      .subscribe(
        (data: MatchData[]) => {
          data.forEach(value => {
            this.matchIds.push(value.matchId);
          });
        }
      );

    this.matchesService.getAllMatchData()
      .subscribe((data: MatchData[]) => {

          this.filteredMatchData = data.filter(value => {
            return (new Date(value.dateTime) > new Date());
          });
          this.matchData = this.filteredMatchData;
          for (let i = 0; i < 6; i++) {
            this.showMathes.push(this.filteredMatchData[i].matchId);
          }
          this.ng4LoadingSpinnerService.hide();
        },
        () => {
          this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});
          this.ng4LoadingSpinnerService.hide();
        });
  }

}
