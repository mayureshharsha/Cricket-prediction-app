import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cricket-prediction-ui';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: 'matches',
        icon: 'pi pi-home'


      },
      {
        label: 'Leadership Board',
        routerLink: 'leadershipboard',
        icon: 'pi pi-users'
      },
      {
        label: 'Prediction History',
        routerLink: 'predictionhistory',
        icon: 'pi pi-bookmark'
      },
      {
        label: 'Logout',
        routerLink: 'login',
        icon: 'pi pi-power-off'
      }
    ];
  }

}
