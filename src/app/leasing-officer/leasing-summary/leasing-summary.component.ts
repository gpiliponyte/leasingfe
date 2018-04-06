import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../../services/lease.service';
import {LeasingOfficerServiceService} from '../../services/leasing-officer-service.service';

@Component({
  selector: 'app-leasing-summary',
  templateUrl: './leasing-summary.component.html',
  styleUrls: ['./leasing-summary.component.css']
})
export class LeasingSummaryComponent implements OnInit {


  constructor(protected leaseService: LeaseService) {
  }

  ngOnInit() {

  }

// i
  // leaseInfo1(){
  //   this.leaseInfo.getAllLeases()
  //     .then(data => {
  //       console.log('subscribe')
  //       this.leaseInfo = data;
  //       console.log(data);
  //     });
}
