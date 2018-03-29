import {Component, Input, OnInit} from '@angular/core';
import {VehicleService} from '../services/vehicle.service';
import {LeaseService} from '../services/lease.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ErrorModuleComponent} from './error-module/error-module.component';

@Component({
  selector: 'app-leasing-application',
  templateUrl: './leasing-application.component.html',
  styleUrls: ['./leasing-application.component.css']
})
export class LeasingApplicationComponent implements OnInit {

  modalRef: BsModalRef;
  showForm = true;
  showSummary = false;
  showCustomerForm = false;
  showConfirmationPage = false;

  constructor(private vehicleService: VehicleService, protected leaseService: LeaseService, private modalService: BsModalService) { }

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

  onSubmitted() {

    this.leaseService.submitLease().then((data) => {
      this.showCustomerForm = false;
      this.showConfirmationPage = true;
    }, (error) => {
      this.modalRef = this.modalService.show(ErrorModuleComponent);
    });

  }

  onBackToSummary() {
    this.showCustomerForm = false;
    this.showSummary = true;
  }

}
