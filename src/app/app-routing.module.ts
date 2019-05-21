import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsContainerComponent} from './cards/cards-container/cards-container.component';
import {PredictionHistoryComponent} from './prediction-history/prediction-history.component';
import {LeadershipBoardComponent} from './leadership-board/leadership-board.component';
import {LoginComponent} from './user-management/login/login.component';

const routes: Routes = [
  {
    path: 'home',
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
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
