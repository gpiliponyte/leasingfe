import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../services/lease.service';

@Component({
  selector: 'app-lease-status',
  templateUrl: './lease-status.component.html',
  styleUrls: ['./lease-status.component.css']
})
export class LeaseStatusComponent implements OnInit {

  leaseID;
  infoIsShown = false;
  response;

  constructor(private leaseService: LeaseService) { }

  ngOnInit() {
  }

  onSearchClick() {
    this.infoIsShown = true;
    this.leaseService.getLeaseByUniqueId(this.leaseID).then(data => {
      this.response = data.customerType;
  });
}
