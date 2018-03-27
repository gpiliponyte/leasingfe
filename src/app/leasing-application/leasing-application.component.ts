import {Component, Input, OnInit} from '@angular/core';
import {VehicleService} from '../services/vehicle.service';
import {LeaseService} from '../services/lease.service';

@Component({
  selector: 'app-leasing-application',
  templateUrl: './leasing-application.component.html',
  styleUrls: ['./leasing-application.component.css']
})
export class LeasingApplicationComponent implements OnInit {

  showForm = true;
  showSummary = false;
  showCustomerForm = false;
  showConfirmationPage = false;
  customerObject;

  constructor(private vehicleService: VehicleService, protected leaseService: LeaseService) { }

  ngOnInit() {
  }

  onGoToSummary() {
    this.showForm = false;
    this.showSummary = true;
    this.vehicleService.changeScrollValue = false;
  }

  onGoBackToForm1() {
    this.showSummary = false;
    this.showForm = true;
  }

  onGoNextToForm2() {
    this.showSummary = false;
    this.showCustomerForm = true;
  }

  onSubmitted(customerObject) {
    this.leaseService.submitLease().then(data => {
      console.log('subscribe');
      this.showCustomerForm = false;
      this.showConfirmationPage = true;
      this.customerObject = customerObject;
    });


    // this.showCustomerForm = false;
    // this.showConfirmationPage = true;
    // this.customerObject = customerObject;
  }

  onBackToSummary() {
    this.showCustomerForm = false;
    this.showSummary = true;
  }

}
