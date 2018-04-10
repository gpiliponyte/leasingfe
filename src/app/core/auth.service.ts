import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorage} from './token.storage';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    return this.http.post<any>('https://leasingbe.herokuapp.com/token/generate-token', credentials);
  }

  refreshToken(ussername: string): Observable<any> {
    const credentials = {username: ussername};
    return this.http.post<any>('https://leasingbe.herokuapp.com/token/refresh-token', credentials);
  }
}
