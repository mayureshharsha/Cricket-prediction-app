import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [SpinnerComponent],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ]
})
export class SpinnerModule { }
