import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../cards/matches.service';
import {AllPlayers} from '../model/all-players';
import {MessageService} from 'primeng/api';
import {AddonPrediction} from '../model/addonPrediction';
import {PredictionHistoryService} from '../prediction-history/prediction-history.service';

@Component({
  selector: 'app-player-prediction',
  templateUrl: './player-prediction.component.html',
  styleUrls: ['./player-prediction.component.css']
})
export class PlayerPredictionComponent implements OnInit {

  allPlayers: AllPlayers[];

  players: any[] = [];

  addonPrediction: AddonPrediction;

  constructor(private matchesService: MatchesService, private messageService: MessageService,
              private predictionHistoryService: PredictionHistoryService) {
    this.addonPrediction = {} as AddonPrediction;
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
  }

  savePrediction() {
    this.addonPrediction.userId = JSON.parse(document.cookie).userId;
    this.predictionHistoryService.saveAddonPrediction(this.addonPrediction).subscribe(value => {
      alert(value);
    }, error1 => {
      alert(error1);
    });
  }

}
