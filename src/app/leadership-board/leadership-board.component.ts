import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../matches.service';
import { LeadershipBoard} from '../leadership-board';

@Component({
  selector: 'app-leadership-board',
  templateUrl: './leadership-board.component.html',
  styleUrls: ['./leadership-board.component.css']
})
export class LeadershipBoardComponent implements OnInit {



  leadershipBoard: LeadershipBoard[];


  constructor(private matchesService: MatchesService) {
  }

  ngOnInit() {
    console.log('inside onInit method');
    this.matchesService.getLeadershipBoard().subscribe(
      (leadershipBoards: LeadershipBoard[]) => {
        this.leadershipBoard = leadershipBoards;
        console.log(this.leadershipBoard);



      }
    );

  }
}
