import { Component, OnInit } from '@angular/core';
import { VehicleService } from './services/vehicle.service';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lease Calculator';

}

