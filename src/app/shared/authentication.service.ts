import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(value) {
    return this.http.post<any>('http://localhost/Genex.WCF/SYS/Authen.svc/Json/Login', { username: value.email, password: value.password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && JSON.parse(user).SessionId !== '00000000-0000-0000-0000-000000000000') {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.parse(user).UserName);
          localStorage.setItem('tk', JSON.parse(user).SessionId);
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }
}
