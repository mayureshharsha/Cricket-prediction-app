import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsContainerComponent } from './cards/cards-container/cards-container.component';
import {PredictionHistoryComponent} from "./prediction-history/prediction-history.component";
import {LeadershipBoardComponent} from "./leadership-board/leadership-board.component";

const routes: Routes = [
  {
    path : 'home',
    component : CardsContainerComponent
  },
  {
    path : 'predictionhistory',
    component : PredictionHistoryComponent
  },
  {
    path : 'leadershipboard',
    component : LeadershipBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
