import {Component, OnInit} from '@angular/core';
import {UserRegistration} from '../../model/user-registration';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userRegistration: UserRegistration;

  constructor(private router: Router, private loginService: LoginService, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService ) {

    this.userRegistration = {} as UserRegistration;
  }

  ngOnInit() {
  }

  register() {
this.ng4LoadingSpinnerService.show();
this.loginService.register(this.userRegistration).subscribe(
  value => {
    this.ng4LoadingSpinnerService.hide();
    this.router.navigateByUrl('/login');
  }, error1 => {
    if (error1.status === 403) {
      alert('Sorry ! the username is already taken');
    } else {
      alert('Something went wrong');
    }
  }
);
  }
}
