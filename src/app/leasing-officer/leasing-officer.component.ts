import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {TokenStorage} from '../core/token.storage';
import {Router} from '@angular/router';
import {Globals} from '../services/globals';
import {AuthGuard} from '../core/auth.guard';


@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  listOfLeases;
  isPendingActive = true;
  isApprovedActive = false;
  isDeclinedActive = false;

  @Output() toSummary = new EventEmitter<Object>();
  constructor(private leaseService: LeaseService, private token: TokenStorage,
              private router: Router, private globals: Globals,
              private guard: AuthGuard) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.globals.status === 'pending') {
      this.pendingLeases();
    }
    if (this.globals.status === 'approved') {
      this.isPendingActive = false;
      this.isDeclinedActive = false;
      this.isApprovedActive = true;
      this.approvedLeases();
    }
    if (this.globals.status === 'declined') {
      this.declinedLeases();
    }
  }

  pendingLeases() {
    this.leaseService.getAllPendingLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'pending';
        this.guard.renewIfSessionExpired();
      }, (error) => {
        console.log('get all pending error');
        console.log(error);
      });
    this.isPendingActive = true;
    this.isDeclinedActive = false;
    this.isApprovedActive = false;
  }
  approvedLeases() {
    this.leaseService.getAllApprovedLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'approved';
        this.guard.renewIfSessionExpired();
      }, (error) => {
        console.log('get all approved error');
        console.log(error);
      });
    this.isPendingActive = false;
    this.isDeclinedActive = false;
    this.isApprovedActive = true;
  }
  declinedLeases() {
    this.leaseService.getAllDeclinedLeases()
      .then(data => {
        this.listOfLeases = data;
        this.globals.status = 'declined';
        this.guard.renewIfSessionExpired();
      }, (error) => {
      });
    this.isPendingActive = false;
    this.isDeclinedActive = true;
    this.isApprovedActive = false;
  }
  getSummary(uniqueId) {
    this.leaseService.getLeaseByUniqueId(uniqueId)
      .then( data => {
        this.leaseService.leaseInfo = data;
        this.guard.renewIfSessionExpired();
      }, (error) => {
      });
  }
  logout(): void {
    this.globals.status = 'pending';
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
