import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import {ButtonModule} from 'primeng/button';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [CardsComponent, CardsContainerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    CommonModule,
    ButtonModule,
    PanelModule
  ]
})
export class CardsModule { }
