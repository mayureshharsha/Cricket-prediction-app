import {Component, OnInit} from '@angular/core';
import {MatchesService} from 'src/app/cards/matches.service';
import {MatchData} from 'src/app/model/match-data';
import {MessageService} from 'primeng/api';
import {PredictionHistoryService} from "../../prediction-history/prediction-history.service";


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  matchData: MatchData[];
  isLoaded = false;
  filteredMatchData: MatchData[];
  matchIds: number[] = [];

  constructor(private predictionByUser: PredictionHistoryService, private matchesService: MatchesService, private messageService: MessageService) {
  }


  ngOnInit() {
    this.predictionByUser.getPredictionHistory()
      .subscribe(
        (data: MatchData[]) => {
          data.forEach(value => {
            this.matchIds.push(value.matchId)
          })
        }
      )

    this.matchesService.getAllMatchData()
      .subscribe((data: MatchData[]) => {
          this.isLoaded = true;
          this.filteredMatchData = data.filter(value => {
            return (new Date(value.dateTime) > new Date());
          })
          this.matchData = this.filteredMatchData;
          console.log(this.matchData.length);
        },
        () => {
          this.isLoaded = false;
          this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});

        });
  }

}
