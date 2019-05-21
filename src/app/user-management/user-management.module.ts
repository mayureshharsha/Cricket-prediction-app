import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule, GrowlModule, PasswordModule} from 'primeng/primeng';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    GrowlModule,
    ButtonModule,

  ]
})
export class UserManagementModule { }
