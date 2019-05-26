import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../cards/matches.service';
import {LeadershipBoard} from '../model/leadership-board';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.css']
})
export class LeadershipBoardComponent implements OnInit {


  leadershipBoard: LeadershipBoard[];

  isLoaded = false;


  constructor(private matchesService: MatchesService, private messageService: MessageService) {
  }

  ngOnInit() {
    console.log('inside onInit method');
    this.matchesService.getLeadershipBoard().subscribe(
      (leadershipBoards: LeadershipBoard[]) => {
        this.leadershipBoard = leadershipBoards;
        console.log(this.leadershipBoard);
        this.isLoaded = true;
        this.messageService.add({severity: 'success', summary: 'Leadership board successfully updated', detail: 'Via MessageService'});
      }, error1 => {

        console.log(error1);
        this.isLoaded = false;
        this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: 'Please try again'});

      }
    );

  }
}
