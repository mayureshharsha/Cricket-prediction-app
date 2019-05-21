import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'cricket-prediction-ui';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink : 'home',
        icon : 'pi pi-home'


      },
      {
        label: 'History',
        routerLink : 'predictionhistory'


      },
      {
        label: 'Leadership Board',
        routerLink : 'leadershipboard'
      },
      {
        label: 'Logout',
        routerLink : '/',
        icon : 'pi pi-power-off'
      }
    ];
  }

}
