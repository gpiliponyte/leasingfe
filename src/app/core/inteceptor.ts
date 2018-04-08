import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {TokenStorage} from './token.storage';
import 'rxjs/add/operator/do';
import {AuthGuard} from './auth.guard';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router,
              private guard: AuthGuard) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    console.log('intercepted');
    if (this.token.getToken() != null) {
      if (!this.guard.isTokenExpired(this.token.getToken())) {
        const date = this.guard.getTokenExpirationDate(this.token.getToken());
        // if (((date.valueOf() - new Date().valueOf()) / 1000) < 300) {
        //   console.log('about to expire');
        //   this.token.signOut();
        //   this.authService.refreshToken('demo').subscribe(
        //     data => {
        //       this.token.saveToken(data.token);
        //     }, error2 => {
        //       console.log(error2);
        //     }
        //   );
        // }
        if (this.token.getToken() != null) {
          console.log((date.valueOf() - new Date().valueOf()) / 1000);
          console.log(this.guard.getTokenExpirationDate(this.token.getToken()));
        }
      } else {
        this.token.signOut();
        this.router.navigate(['login']);
        console.log('i am expired, sorry');
      }
    }
    if (this.token.getToken() != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
    return next.handle(authReq).do(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('erroras');
          console.log(err);
          console.log('req url :: ' + req.url);
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      }
    );
  }

}
