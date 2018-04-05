import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../services/lease.service';
import {CalendarService} from '../services/calendar.service';

@Component({
  selector: 'app-lease-status',
  templateUrl: './lease-status.component.html',
  styleUrls: ['./lease-status.component.css']
})
export class LeaseStatusComponent implements OnInit {

  leaseID;
  infoIsShown = false;
  isError = false;
  isCalendarError = false;
  response;
  calendarResponse;

  constructor(public leaseService: LeaseService, public calendarService: CalendarService) { }

  ngOnInit() {
  }

  onSearchClick() {
//
    this.leaseService.getLeaseByUniqueId(this.leaseID).then(data => {
      this.response = data;
      this.isError = false;
      this.infoIsShown = true;
      this.calendarService.getCalendarByUniqueId(this.leaseID).then(calendarData => {
        this.calendarResponse = calendarData;
        this.isCalendarError = false;
      }, calendarError => {
        this.isCalendarError = true;
      });
    }, error => {
      this.isError = true;
      this.infoIsShown = true;
    });
  }
}
