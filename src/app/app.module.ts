import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { MatchesService } from './cards/matches.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { PredictionHistoryComponent } from './prediction-history/prediction-history.component';
import { LeadershipBoardComponent } from './leadership-board/leadership-board.component';
import {UserManagementModule} from './user-management/user-management.module';
import {ToastModule} from 'primeng/toast';
import { SpinnerComponent } from './spinner/spinner/spinner.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SpinnerModule} from './spinner/spinner.module';




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
    UserManagementModule,
    ToastModule,
    ProgressSpinnerModule,
    SpinnerModule
  ],
  providers: [MatchesService, MessageService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
