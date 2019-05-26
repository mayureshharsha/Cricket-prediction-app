import {Component, OnInit} from '@angular/core';
import {UserRegistration} from '../../model/user-registration';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userRegistration: UserRegistration;

  constructor(private router: Router, private loginService: LoginService ) {

    this.userRegistration = {} as UserRegistration;
  }

  ngOnInit() {


  }

  register() {
this.loginService.register(this.userRegistration).subscribe(
  value => {
    this.router.navigateByUrl('/login');
  }
);
  }
}
