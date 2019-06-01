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
  username: string;

  constructor(private matchesService: MatchesService,
              private messageService: MessageService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.username = JSON.parse(document.cookie).username;
    this.ng4LoadingSpinnerService.show();
    this.matchesService.getLeadershipBoard().subscribe(
      (leadershipBoards: LeadershipBoard[]) => {
        this.ng4LoadingSpinnerService.hide();
        leadershipBoards.sort(this.compare);
        this.leadershipBoard = leadershipBoards;
        // ranking
        let rank = 1;
        for (let i = 0; i < this.leadershipBoard.length; i++) {
          // increase rank only if current score less than previous
          if (i > 0 && this.leadershipBoard[i].points < this.leadershipBoard[i - 1].points) {
            rank++;
          }
          this.leadershipBoard[i].rank = rank;
        }
        this.messageService.add({severity: 'success', summary: 'Leadership board successfully updated', detail: 'Success'});
      }, error1 => {
        this.ng4LoadingSpinnerService.hide();
        console.log(error1);
        this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: 'Please try again'});
      }
    );

  }

  compare( a, b ) {
    if ( a.points > b.points ) {
      return -1;
    }
    if ( a.points < b.points ) {
      return 1;
    }
    return 0;
  }

}
