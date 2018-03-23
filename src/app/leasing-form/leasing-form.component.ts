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
  assetTypes = ['New', 'Used'];
  paymentDates = [15, 30];
  years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
  validationRegex = '^([1-9])\\d*(?:\\.\\d{1,2})?\\s*$';

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
  rangeValue;
  modelsBySelectedBrand;
  selectedBrand = '';
  selectedModel = '';
  showForm = true;
  showFormSummary = false;
  showOK = false;
  changeScrollValue = true;
  selectedYear = '';
  value;
  temp: number;
  temp1;
  temp2;
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
      'enginePower': new FormControl(null, [Validators.required, Validators.pattern(this.validationRegex),
        Validators.min(1)]),
      'assetPrice': new FormControl(null, [Validators.required, Validators.pattern(this.validationRegex),
        Validators.min(5000)]),
      'advancePaymentPercentage': new FormControl(10,
        [Validators.required, Validators.pattern(this.validationRegex), Validators.max(100),
          Validators.min(10)]),
      'advancePaymentAmount': new FormControl(null),
      'leasePeriod': new FormControl(6, Validators.required),
      'margin': new FormControl(3.2,
        [Validators.required, Validators.pattern(this.validationRegex), Validators.max(100),
          Validators.min(3.2)]),
      'contractFee': new FormControl(200, Validators.required),
      'paymentDate': new FormControl(null, Validators.required)
    });
    this.loadVehicles();
    this.onChanges();
  }

  getCarModelsByBrand(brand) {
    if (this.changeScrollValue) {
      this.selectedModel = '';
    }
    this.changeScrollValue ? this.selectedModel = '' : this.changeScrollValue = true;
    this.modelsBySelectedBrand = [];
    this.listVehicle.forEach(data => {
      console.log(data['groupValue']);
      if (data['groupValue'] === brand) {
        this.modelsBySelectedBrand.push(data['text']);
      }
    });
  }

  goBackToForm() {
    this.showFormSummary = false;
    this.showForm = true;
  }

  submit() {
    this.showFormSummary = false;
    this.showOK = true;
  }

  onSubmit() {
    console.log(this.leaseForm);
    this.showFormSummary = true;
    this.showForm = false;
    this.changeScrollValue = false;
  }

  pitch(event: any) {
    this.rangeValue = event.value;

  }

  onChanges() {
    // this.leaseForm.get('advancePaymentPercentage').valueChanges.subscribe(val => {
    //   // console.log(val);
    //   if (this.leaseForm.get('advancePaymentPercentage').valid) {
    //     this.value = this.leaseForm.get('assetPrice').value * (parseFloat(val) / 100);
    //     // console.log('parsed value :' + parseFloat(val));
    //     // console.log(this.leaseForm.get('assetPrice').value);
    //     // console.log(this.value);
    //     this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
    //     // console.log('ALIO' + this.value.toFixed(2));
    //   } else {
    //     this.leaseForm.get('advancePaymentAmount').patchValue('');
    //   }
    // });
    this.leaseForm.get('assetPrice').valueChanges.subscribe(val => {
      // console.log('assetprice ' + val);
      if (this.leaseForm.get('assetPrice').valid) {
        this.value = val * (1 / 100);
        if (this.value > this.leaseForm.get('contractFee').value && this.value > 200) {
          this.leaseForm.get('contractFee').patchValue(this.value.toFixed(2));
        }
        if (this.value > 200) {
          this.leaseForm.get('contractFee').patchValue(this.value.toFixed(2));
        } else {
          this.leaseForm.get('contractFee').patchValue(200);
        }
        if (this.leaseForm.get('assetPrice').valid) {
          this.leaseForm.get('advancePaymentAmount').patchValue((
            val * (this.leaseForm.get('advancePaymentPercentage').value / 100))
            .toFixed(2));
        } else {
          // console.log('I am nan');
          this.leaseForm.get('advancePaymentAmount').patchValue('');
        }
        // console.log(parseFloat(val));
        // console.log(this.value);
      } else {
        this.leaseForm.get('contractFee').patchValue(200);
        this.leaseForm.get('advancePaymentAmount').patchValue('');
      }
    });
  }

  keyUpAdvancePaymentAmount(){
      if (this.leaseForm.get('advancePaymentPercentage').valid) {
        this.value = this.leaseForm.get('assetPrice').value * (this.leaseForm.get('advancePaymentPercentage').value / 100);
        this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
      } else {
        this.leaseForm.get('advancePaymentAmount').patchValue('');
      }
  }
  keyUpAdvancePaymentPercentage() {
    this.temp2 = this.leaseForm.get('advancePaymentAmount').value;
      this.temp  = ((this.leaseForm.get('advancePaymentAmount').value / this.leaseForm.get('assetPrice').value) * 100);
      this.temp1 = (this.leaseForm.get('assetPrice').value * 0.1);
       if (this.temp <= 100 || this.temp >= 10) {
        this.leaseForm.get('advancePaymentPercentage').setValue(this.temp.toFixed(2));
       }
      if (this.temp > 100 || this.temp < 10) {
        this.leaseForm.get('advancePaymentPercentage').setValue(10);
        this.leaseForm.get('advancePaymentAmount').setValue(this.temp1);
      }
    }
  }

