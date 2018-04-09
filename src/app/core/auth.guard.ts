import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenStorage} from './token.storage';
import * as jwt_decode from 'jwt-decode';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private token: TokenStorage,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token.getToken() != null) {
      // logged in so return true
      if (this.isTokenExpired(this.token.getToken())) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['login']);
    return false;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }


    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.token.getToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  renewIfSessionExpired() {
    if (this.token.getToken() != null) {
      if (!this.isTokenExpired(this.token.getToken())) {
        const date = this.getTokenExpirationDate(this.token.getToken());
        if (((date.valueOf() - new Date().valueOf()) / 1000) < 300) {
          this.token.signOut();
          this.authService.refreshToken('green').subscribe(
            data => {
              this.token.saveToken(data.token);
            }, error2 => {
            }
          );
        }
      } else {
        this.token.signOut();
        this.router.navigate(['login']);
      }
    }
  }
}
