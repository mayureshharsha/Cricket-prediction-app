import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';

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
    return this.http.post('utl'
      ,
      user,

      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
