import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-leasing-form',
  templateUrl: './leasing-form.component.html',
  styleUrls: ['./leasing-form.component.css']
})
export class LeasingFormComponent implements OnInit {
  leaseForm: FormGroup;

  defaultContractFee = 200;
  customerTypes = ['Private', 'Business'];
  assetTypes = ['New', 'Old'];
  paymentDates = [15, 30];
  years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\,\\d{1,2})?\\s*$';

  customerType;
  assetType;
  brand;
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
  brands;
  modelsBySelectedBrand;
  selectedBrand = '';
  selectedModel = '';
  showForm = true;
  showFormSummary = true;
  showOK = true;
  selectedYear = '';

  listVehicle;

  constructor(private vehicleService: VehicleService) {
  }


  loadVehicles() {
    this.vehicleService.getAllVehicleInfo()
      .then(data => {
        this.listVehicle = data;
        let temp = [];
        this.listVehicle.forEach(data => temp.push(data['groupValue']));
        this.brands = Array.from(new Set(temp));
      });
  }


  ngOnInit() {

    this.leaseForm = new FormGroup({
      'customerType': new FormControl(null, Validators.required),
      'assetType': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'enginePower': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
      'assetPrice': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
      'advancePaymentPercentage': new FormControl(null,
        [Validators.required, Validators.pattern(this.numberRegex), Validators.max(100), Validators.maxLength(4)]),
      'advancePaymentAmount': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
      'leasePeriod': new FormControl(200, Validators.required),
      'margin': new FormControl(null,
        [Validators.required, Validators.pattern(this.numberRegex), Validators.max(100), Validators.maxLength(4)]),
      'contractFee': new FormControl(200, Validators.required),
      'paymentDate': new FormControl(15, Validators.required)
    });
    this.loadVehicles();

  }

  getCarModelsByBrand(brand) {
    this.selectedModel = '';
    this.modelsBySelectedBrand = [];
    this.listVehicle.forEach(data => {
      console.log(data['groupValue']);
      if (data['groupValue'] === brand) {
        this.modelsBySelectedBrand.push(data['text']);
      }
    });
  }

  onSubmit() {
    console.log(this.leaseForm);
  }

}
