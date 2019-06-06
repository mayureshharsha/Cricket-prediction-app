import {Component, OnInit} from '@angular/core';
import {UserRegistration} from '../../model/user-registration';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userRegistration: UserRegistration;

  constructor(private router: Router, private loginService: LoginService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,
              private messageService: MessageService) {

    this.userRegistration = {} as UserRegistration;
  }

  ngOnInit() {
  }

  register() {
    this.ng4LoadingSpinnerService.show();
    this.loginService.register(this.userRegistration).subscribe(
      value => {
        this.ng4LoadingSpinnerService.hide();
        this.messageService.add({
          severity: 'success',
          summary: 'Registered successfully',
          detail: 'Success'
        });
        this.router.navigateByUrl('/login');
      }, error1 => {
        this.ng4LoadingSpinnerService.hide();
        let msg = '';
        if (error1.status === 403) {
          msg = 'Sorry ! the username is already taken';
        } else {
          msg = 'Something went wrong';
        }
        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      }
    );
  }
}
