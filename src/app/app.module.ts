import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { MatchesService } from './matches.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { PredictionHistoryComponent } from './prediction-history/prediction-history.component';
import { LeadershipBoardComponent } from './leadership-board/leadership-board.component';
import {UserManagementModule} from './user-management/user-management.module';



@NgModule({
  declarations: [
    AppComponent,
    PredictionHistoryComponent,
    LeadershipBoardComponent
  ],
  imports: [
    TableModule,
    ButtonModule,
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    UserManagementModule
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
