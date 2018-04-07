import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: boolean;

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  }

  ngOnInit() {
    this.errorMessage = false;
  }

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['leasingOfficer']);
      }, error2 => {
        console.log(error2);
        this.errorMessage = true;
      }
    );
  }

}
