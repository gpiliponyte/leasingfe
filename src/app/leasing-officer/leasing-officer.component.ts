import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../services/lease.service';

@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {

  listOfLeases;

  constructor(private leaseService: LeaseService) { }

  ngOnInit() {

  }

  pendingLeases() {
    this.leaseService.getAllPendingLeases()
      .then(data => {
        console.log('subscribe')
        this.listOfLeases = data;
      });
  }
  approvedLeases() {
    this.leaseService.getAllApprovedLeases()
      .then(data => {
        console.log('subscribe')
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
}
