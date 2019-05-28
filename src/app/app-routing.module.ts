import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsContainerComponent} from './cards/cards-container/cards-container.component';
import {PredictionHistoryComponent} from './prediction-history/prediction-history.component';
import {LeadershipBoardComponent} from './leadership-board/leadership-board.component';
import {LoginComponent} from './user-management/login/login.component';
import {RegistrationComponent} from './user-management/registration/registration.component';
import {LogoutComponent} from "./user-management/logout/logout.component";

const routes: Routes = [
  {
    path: 'home',
    component: CardsContainerComponent
  },
  {
    path: 'matches',
    component: CardsContainerComponent
  },
  {
    path: 'predictionhistory',
    component: PredictionHistoryComponent
  },
  {
    path: 'leadershipboard',
    component: LeadershipBoardComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
