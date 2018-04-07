import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {ErrorModuleComponent} from '../leasing-application/error-module/error-module.component';
import {LeasingSummaryComponent} from './leasing-summary/leasing-summary.component';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';
import {Globals} from '../services/globals';


@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  listOfLeases;
  @Output() toSummary = new EventEmitter<Object>();
  constructor(private leaseService: LeaseService, private token: TokenStorage, private router: Router, private globals: Globals) { }

  ngOnInit() {
    if (this.globals.status === 'pending') {
      this.pendingLeases();
    }
    if (this.globals.status === 'approved') {
      this.approvedLeases();
    }
    if (this.globals.status === 'declined') {
      this.deniedLeases();
    }
    //this.pendingLeases();
  }

  pendingLeases() {
    this.leaseService.getAllPendingLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'pending';
      });
  }
  approvedLeases() {
    this.leaseService.getAllApprovedLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'approved';
      });
  }
  deniedLeases() {
    this.leaseService.getAllDeniedLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'declined';
      });
  }
  getSummary(uniqueId) {
    this.leaseService.getLeaseByUniqueId(uniqueId)
      .then( data => {
        this.leaseService.leaseInfo = data;
      });
  }
  logout(): void {
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
