import {Component, OnInit} from '@angular/core';
import {MatchesService} from 'src/app/cards/matches.service';
import {MatchData} from 'src/app/model/match-data';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  matchData: MatchData[];
  isLoaded = false;

  constructor(private matchesService: MatchesService,  private messageService: MessageService) {
  }


  ngOnInit() {
    this.matchesService.getAllMatchData()
      .subscribe((data: MatchData[]) => {
        this.isLoaded = true;
        this.matchData = data;
        console.log(this.matchData.length);
      },
        () => {
          this.isLoaded = false;
          this.messageService.add({severity: 'error', summary: 'SomeThing went wrong', detail: 'Please try again'});

        });
  }

}
