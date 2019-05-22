import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  msgs: any;

  constructor(private router: Router) {
    this.user = <User>{};

  }

  ngOnInit() {
  }

  login() {
     this.router.navigateByUrl('/home');
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
