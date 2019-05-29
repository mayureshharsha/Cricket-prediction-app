import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../cards/matches.service';
import {LeadershipBoard} from '../model/leadership-board';
import {MessageService} from 'primeng/api';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.css']
})
export class LeadershipBoardComponent implements OnInit {


  leadershipBoard: LeadershipBoard[];

  constructor(private matchesService: MatchesService,
              private messageService: MessageService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.ng4LoadingSpinnerService.show();
    this.matchesService.getLeadershipBoard().subscribe(
      (leadershipBoards: LeadershipBoard[]) => {
        this.ng4LoadingSpinnerService.hide();
        this.leadershipBoard = leadershipBoards;
        this.messageService.add({severity: 'success', summary: 'Leadership board successfully updated', detail: 'Success'});
      }, error1 => {
        this.ng4LoadingSpinnerService.hide();
        console.log(error1);
        this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: 'Please try again'});
      }
    );

  }
}
