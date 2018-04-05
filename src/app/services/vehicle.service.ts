import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehicleService {
  changeScrollValue = true;

  constructor(private http: HttpClient) { }

  getAllVehicleInfo() {
    return this.http
    .get('https://leasingbe.herokuapp.com/vehicles')
    .toPromise();

    // return this.http
    //   .get('http://localhost:8080/vehicles')
    //   .toPromise();
  }

}
