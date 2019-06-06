import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cricket-prediction-ui';
  items: MenuItem[];
  currentRoute: string;


  constructor(private router: Router) {
  }

  hideMenu(): boolean {
    return (this.router.url != '/login' && this.router.url != '/register');
  }

  ngOnInit() {

    this.currentRoute = this.router.url;
    this.items = [
      {
        label: 'Home',
        routerLink: 'matches',
        icon: 'pi pi-home'


      },
      {
        label: 'Leader Board',
        routerLink: 'leadershipboard',
        icon: 'pi pi-users'
      },
      {
        label: 'Prediction History',
        routerLink: 'predictionhistory',
        icon: 'pi pi-bookmark'
      },
      {
        label: 'Rules',
        routerLink: 'rules',
        icon: 'pi pi-info-circle  '
      },
      {
        label: 'Logout',
        routerLink: 'logout',
        icon: 'pi pi-power-off'
      }
    ];
  }

  get username() {
    if (document.cookie !== '') {
      return JSON.parse(document.cookie).username;
    }
    return '';
  }
}
