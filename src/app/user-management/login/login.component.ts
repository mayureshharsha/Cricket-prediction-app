import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MessageService} from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  msgs: any;

  constructor(private router: Router, private loginService: LoginService,
              private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,
              private messageService: MessageService) {
    this.user = {} as User;

  }

  ngOnInit() {

  }

  login() {
    this.ng4LoadingSpinnerService.show();
    this.loginService.login(this.user).subscribe(
      (response: any) => {
        this.ng4LoadingSpinnerService.hide();
        this.messageService.add({
          severity: 'success',
          summary: 'Login succeeded',
          detail: 'Success'
        });
        Swal.fire({
          title: 'Point upgrades for the Final matches',
          text: 'Please check out the RULES page.',
        });
        // this.deleteAllCookies();
        document.cookie = '';
        response.username = this.user.username;
        document.cookie = JSON.stringify(response);
        this.router.navigateByUrl('/home');
      },
      error => {
        let msg = '';
        if (error.status === 401) {
          msg = 'Invaild username/password';
        } else {
          msg = 'Something went wrong';
        }
        this.messageService.add({
          severity: 'error',
          summary: msg
        });
        console.log(error);

      }
    );

  }


  deleteAllCookies() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
