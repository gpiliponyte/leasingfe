import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {ErrorModuleComponent} from '../leasing-application/error-module/error-module.component';
import {LeasingSummaryComponent} from './leasing-summary/leasing-summary.component';


@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  listOfLeases;

  @Output() toSummary = new EventEmitter<Object>();
  constructor(private leaseService: LeaseService) { }

  ngOnInit() {
    this.pendingLeases();
  }

  pendingLeases() {
    this.leaseService.getAllPendingLeases()
      .then(data => {
        console.log('subscribe')
        this.listOfLeases = data;
        console.log(data);
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
        console.log('subscribe')
        this.listOfLeases = data;
      });
  }
  getSummary(uniqueId){
    this.leaseService.getLeaseByUniqueId(uniqueId)
      .then( data => {
        this.leaseService.leaseInfo = data;
      });
  }
}
