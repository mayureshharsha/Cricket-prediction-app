import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { MatchesService } from './matches.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api'
import {ButtonModule} from 'primeng/button';
import { PredictionHistoryComponent } from './prediction-history/prediction-history.component';
import { LeadershipBoardComponent } from './leadership-board/leadership-board.component';



@NgModule({
  declarations: [
    AppComponent,
    PredictionHistoryComponent,
    LeadershipBoardComponent
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
