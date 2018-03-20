import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leasing-form',
  templateUrl: './leasing-form.component.html',
  styleUrls: ['./leasing-form.component.css']
})
export class LeasingFormComponent implements OnInit {

  customerType;
  assetType;
  make;
  model;
  year;
  enginePower;
  assetPrice;
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriod;
  margin;
  contractFee;
  paymentDate;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
