import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  msgs: any;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = {} as User;

  }

  ngOnInit() {

  }

  login() {
    this.loginService.login(this.user).subscribe(
      (response: any) => {
        this.deleteAllCookies();
        response.username = this.user.username;
        document.cookie = JSON.stringify(response);
        this.router.navigateByUrl('/home');
      },
      error => {

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
