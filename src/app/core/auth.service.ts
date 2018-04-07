import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TokenStorage} from './token.storage';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080/';

  constructor(private http: HttpClient, private storage: TokenStorage) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }

  refreshToken(ussername: string): Observable<any> {
    const credentials = {username: ussername};
    console.log('refresh ::');
    return this.http.post<any>('http://localhost:8080/token/refresh-token', credentials);
  }
}
