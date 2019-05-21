import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  msgs: any;

  constructor() {
    this.user = <User>{};

  }

  ngOnInit() {
  }

  login() {

  }
}
