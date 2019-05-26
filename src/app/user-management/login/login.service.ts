import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {UserRegistration} from '../../model/user-registration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }


  // tslint:disable-next-line:variable-name
  private _userName: string;

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post('http://localhost:8090/v1/usermgmt/login',
      user,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  register(userRegistration: UserRegistration) {
    return this.http.post('http://localhost:8090/v1/usermgmt/users',
      userRegistration,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  }
}
