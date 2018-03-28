import {Component, Input, OnInit} from '@angular/core';
import {VehicleService} from '../services/vehicle.service';
import {LeaseService} from '../services/lease.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ErrorModuleComponent} from '../error-module/error-module.component';

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
  //Is set to show error message for testing purposes
  isError = false;

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
    this.leaseService.submitLease().then(data => {
      if (this.isError) {
        this.modalRef = this.modalService.show(ErrorModuleComponent);
        this.modalRef.content.onClose.subscribe(result => {
          console.log('results', result);
        });
      }
      else {
        this.showCustomerForm = false;
        this.showConfirmationPage = true;
      }
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
