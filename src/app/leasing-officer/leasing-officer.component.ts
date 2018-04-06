import {Component, OnInit} from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  listOfLeases;

  constructor(private leaseService: LeaseService, private token: TokenStorage, private router: Router) {
  }

  ngOnInit() {

  }

  logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
  }

  pendingLeases() {
    this.leaseService.getAllPendingLeases()
      .then(data => {
        console.log('subscribe');
        this.listOfLeases = data;
      });
  }

  approvedLeases() {
    this.leaseService.getAllApprovedLeases()
      .then(data => {
        console.log('subscribe');
        this.listOfLeases = data;
      });
  }

  deniedLeases() {
    this.leaseService.getAllDeniedLeases()
      .then(data => {
        console.log('subscribe');
        this.listOfLeases = data;
      });
  }
}
