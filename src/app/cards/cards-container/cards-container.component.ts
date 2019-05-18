import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/matches.service';
import { MatchData } from 'src/app/match-data';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  matchData: MatchData[];

  constructor(private matchesService: MatchesService) { }

  

  ngOnInit() {
    this.matchesService.getAllMatchData()
      .subscribe((data: MatchData[]) => {
        this.matchData = data;
        console.log(this.matchData.length);
      });
  }
 
}