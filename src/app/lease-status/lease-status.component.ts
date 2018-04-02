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
  isError = false;
  response;

  constructor(public leaseService: LeaseService) { }

  ngOnInit() {
  }

  onSearchClick() {
    this.leaseService.getLeaseByUniqueId(this.leaseID).then(data => {
      this.response = data;
      this.isError = false;
      this.infoIsShown = true;
  }, error => {
      this.isError = true;
      this.infoIsShown = true;
    });
  }
}
