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
    console.log(this.user.password + this.user.username);
    this.loginService.login(this.user).subscribe(
      (response) => {
        this.loginService.userName = this.user.username
        document.cookie = JSON.stringify(response)
        this.router.navigateByUrl('/home');
      },
      error => {
        this.loginService.userName = null;
        console.log(error);

      }
    );

  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
