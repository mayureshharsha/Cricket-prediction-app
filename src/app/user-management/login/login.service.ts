import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {UserRegistration} from '../../model/user-registration';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post(environment.hostUrl + '/v1/usermgmt/login',
      user,
      {
        headers: {
          'Content-Type': 'application/json',
          Token: document.cookie
        },
        withCredentials: true
      }
    );
  }

  register(userRegistration: UserRegistration) {
    return this.http.post(environment.hostUrl + '/v1/usermgmt/users',
      userRegistration,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Token: document.cookie
        }
      }
    );

  }
}
