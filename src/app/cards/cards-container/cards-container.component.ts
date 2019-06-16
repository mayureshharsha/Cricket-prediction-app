import {Component, OnInit} from '@angular/core';
import {MatchesService} from 'src/app/cards/matches.service';
import {MatchData} from 'src/app/model/match-data';
import {MessageService} from 'primeng/api';
import {PredictionHistoryService} from '../../prediction-history/prediction-history.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {AllPlayers} from '../../model/all-players';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  matchData: MatchData[];
  filteredMatchData: MatchData[];
  allPlayers: AllPlayers[];
  matchIds: number[] = [];
  showMathes: number[] = [];

  constructor(private predictionByUser: PredictionHistoryService,
              private matchesService: MatchesService, private messageService: MessageService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
  }


  ngOnInit() {
    if (this.predictionByUser.showMsg && (new Date()) < (new Date('2019-06-20T09:30:00.000Z'))) {
      Swal.fire({
        title: '<i class="fa fa-bullhorn"></i> &nbsp;Update',
        html: '<b>Hey Cricket lovers! From match no. 26, we have included another prediction "Man of the Match", with' +
          ' 200 points for predicting correct and no negative points.<br>' +
          'Also you get a chance to win a reward of 250 points if you get all the 3 predictions right for a match.<br>' +
          'Kindly check out the Rules page for more details on pointing.</b>',
        confirmButtonText: 'Cool <i class="fa fa-thumbs-up"></i>'
      });
      this.predictionByUser.showMsg = false;
    }

    this.ng4LoadingSpinnerService.show();


    this.matchesService.getAllPlayers().subscribe(
      value => {
        this.allPlayers = value;
      },
      error1 => {
        this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});

      }
    );


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
          for (let i = 0; i < 3; i++) {
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
