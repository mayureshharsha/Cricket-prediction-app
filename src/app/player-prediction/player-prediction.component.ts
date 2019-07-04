import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../cards/matches.service';
import {AllPlayers} from '../model/all-players';
import {MessageService} from 'primeng/api';
import {AddonPrediction} from '../model/addonPrediction';
import {PredictionHistoryService} from '../prediction-history/prediction-history.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-player-prediction',
  templateUrl: './player-prediction.component.html',
  styleUrls: ['./player-prediction.component.css']
})
export class PlayerPredictionComponent implements OnInit {

  allPlayers: AllPlayers[];

  players: any[] = [];

  addonPrediction: AddonPrediction;

  selectAddonPrediction: AddonPrediction;
  dates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private matchesService: MatchesService, private messageService: MessageService,
              private predictionHistoryService: PredictionHistoryService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    this.addonPrediction = {} as AddonPrediction;
    this.selectAddonPrediction = {} as AddonPrediction;
  }

  ngOnInit() {
    this.matchesService.getAllPlayers().subscribe(
      value => {
        this.allPlayers = value;
        this.allPlayers.forEach(value1 => {
          const players = Object.assign([], value1.players);
          players.forEach((player, index) => {
            const name = player;
            player = {};
            player.label = name;
            player.value = name;
            players[index] = player;
          });

          const play = {
            label: value1.team,
            value: '/assets/' + value1.team + '.png',
            items: players
          };
          this.players.push(play);
        });
      },
      error1 => {
        this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});
      }
    );

    this.getAddonPrediction();
  }

  private getAddonPrediction() {
    this.predictionHistoryService.getAddonPrediction().subscribe((addonPrediction: AddonPrediction) => {
        if (addonPrediction !== null && addonPrediction !== undefined) {
          this.addonPrediction = addonPrediction;
        }
      },
      error1 => {
        this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});
      });
  }

  savePotPrediction() {
    const prediction: AddonPrediction = {} as AddonPrediction;
    prediction.pot = this.selectAddonPrediction.pot;
    this.savePrediction(prediction);
  }

  saveHrgPrediction() {
    const prediction: AddonPrediction = {} as AddonPrediction;
    prediction.hrg = this.selectAddonPrediction.hrg;
    this.savePrediction(prediction);
  }

  saveHwtPrediction() {
    const prediction: AddonPrediction = {} as AddonPrediction;
    prediction.hwt = this.selectAddonPrediction.hwt;
    this.savePrediction(prediction);
  }

  savePrediction(addonPrediction) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.dismiss) {
        return;
      }
      this.ng4LoadingSpinnerService.show();
      addonPrediction.userId = JSON.parse(document.cookie).userId;
      this.predictionHistoryService.saveAddonPrediction(addonPrediction).subscribe(value => {
        this.ng4LoadingSpinnerService.hide();
        this.messageService.add({
          severity: 'success',
          summary: 'Prediction added successfully',
          detail: 'Success'
        });
        this.getAddonPrediction();
      }, error1 => {
        this.ng4LoadingSpinnerService.hide();
        this.messageService.add({
          severity: 'error',
          summary: 'Something Went Wrong'
        });
      });
    });
  }

}
