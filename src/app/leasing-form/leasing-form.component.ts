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
  numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,2})?\\s*$';

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
  value: number;
  listVehicle;

  constructor(private vehicleService: VehicleService) {
  }


  loadVehicles() {
    this.vehicleService.getAllVehicleInfo()
      .then(data => {
        this.listVehicle = data;
        const temp = [];
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
      'advancePaymentPercentage': new FormControl(10,
        [Validators.required, Validators.pattern(this.numberRegex), Validators.max(100), Validators.maxLength(4)]),
      'advancePaymentAmount': new FormControl(null, [Validators.required, Validators.pattern(this.numberRegex)]),
      'leasePeriod': new FormControl(200, Validators.required),
      'margin': new FormControl(3.2,
        [Validators.required, Validators.pattern(this.numberRegex), Validators.max(100), Validators.maxLength(4),
          Validators.min(3.2)]),
      'contractFee': new FormControl(200),
      'paymentDate': new FormControl(null, Validators.required)
    });
    this.loadVehicles();

    this.onChanges();

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

  autocalculateAPAandAPP() {
    this.advancePaymentAmount = this.assetPrice * (this.advancePaymentPercentage / 100);
    this.contractFee = this.assetPrice * 0.01;
    if (this.contractFee < 200) {
      this.contractFee = 200;
    }

  }

  autocalculateAPA() {
    if (this.advancePaymentPercentage < 10 && this.advancePaymentPercentage > 100) {
      this.advancePaymentAmount = this.assetPrice * (10 / 100);
    } else {
      this.advancePaymentAmount = this.assetPrice * (this.advancePaymentPercentage / 100);
    }
  }

  autocalculateAPP() {
    this.advancePaymentPercentage = (this.assetPrice / this.advancePaymentAmount) * 100;
  }

  onChanges() {
    this.leaseForm.get('advancePaymentPercentage').valueChanges.subscribe(val => {
      console.log(val);
      this.value = this.leaseForm.get('assetPrice').value * (parseFloat(val) / 100);
      console.log(parseFloat(val));
      console.log(this.leaseForm.get('assetPrice').value);
      console.log(this.value);
      this.leaseForm.get('leasePeriod').patchValue(this.value);
    });
    this.leaseForm.get('assetPrice').valueChanges.subscribe(val => {
      console.log('assetprice ' + val);
      this.value = val * (1 / 100);
      if (this.value > this.leaseForm.get('contractFee').value && this.value > 200) {
        this.leaseForm.get('contractFee').patchValue(this.value);
      }
      if (this.value > 200) {
        this.leaseForm.get('contractFee').patchValue(this.value);
      } else {
        this.leaseForm.get('contractFee').patchValue(200);
      }
      console.log(parseFloat(val));
      console.log(this.value);
    });
  }
}
