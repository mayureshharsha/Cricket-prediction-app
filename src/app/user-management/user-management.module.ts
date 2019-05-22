import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, GrowlModule, PasswordModule} from 'primeng/primeng';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    GrowlModule,
    ButtonModule,
    AppRoutingModule,
    ReactiveFormsModule

  ]
})
export class UserManagementModule {
}
