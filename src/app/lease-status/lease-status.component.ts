import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {ScheduleService} from '../services/schedule.service';


@Component({
  selector: 'app-lease-status',
  templateUrl: './lease-status.component.html',
  styleUrls: ['./lease-status.component.css']
})
export class LeaseStatusComponent implements OnInit {
  leaseID;
  infoIsShown = false;
  isError = false;
  isScheduleError = false;
  response;
  scheduleResponse;
  margin = 4.27;
  constructor(public leaseService: LeaseService, public scheduleService: ScheduleService) { }


  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSearchClick() {
    this.leaseService.getLeaseByUniqueId(this.leaseID).then(data => {
      this.response = data;
      this.isError = false;
      this.infoIsShown = true;
      this.scheduleService.getSchedule
      (this.response.advancePaymentAmount, this.response.assetPrice, this.response.date,
        this.response.leasePeriod, this.response.paymentDate, this.margin)
        .then(scheduleData => {
          this.scheduleResponse = scheduleData;
          this.isScheduleError = false;
      }, scheduleError => {
          this.isScheduleError = true;
      });

    }, error => {
      this.isError = true;
      this.infoIsShown = true;
    });
  }
}
