import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class AuthService {
  private base = '/auth/users';

  constructor(private http: Http, private cookieService: CookieService) { }

  login(user: User): Promise<User> {
    return this.http
      .post(`${this.base}/login`, user)
      .pipe(map(response => response.json()))
      .toPromise();
  }

  // register(user: User): Promise<User> {
  //   return this.http
  //     .post(`${this.base}/register`, user)
  //     .pipe(map(response => response.json()))
  //     .toPromise();
  // }

  register(user: User) {
    return this.http
      .post(`${this.base}/register`, user)
      .pipe(map(response => response.json()));
  }

  findSuperUser(): Promise<User> {
    return this.http.get(`${this.base}/superuser`)
      .pipe(map(user => user.json()))
      .toPromise();
  }

  logout(): Promise<User> {
    return this.http
      .delete(`${this.base}/logout`)
      .pipe(map(response => response.json()))
      .toPromise();
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && expired && userID && expired > Date.now());
  }
}
