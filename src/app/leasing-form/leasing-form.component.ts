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
  privateForm: FormGroup;
  businessCustomerForm: FormGroup;

  defaultContractFee = 200;
  customerTypes = ['Private', 'Business'];
  assetTypes = ['New', 'Used'];
  paymentDates = [15, 30];
  years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  numberRegex = '^\\s*(?=.*[1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
  validationRegex = '^([1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
  lithuanianRegex = '^[a-zA-Z0-9ĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
  companyCodeRegex = '^[a-zA-Z0-9]+$';
  emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
  postCodeRegex = '[LT]{2}\\d{5}';
  streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
  phoneNumberRegex = '^[0-9]{11}';
  personalIDRegex = '^[3-6][0-9]{2}[0,1][0-9][0-9]{2}[0-9]{4}$';
  nameRegex = '^[a-zA-ZąčęėįųūšžĄČĖĘĮŲŪČŠŽ ,.\'-]+$';
  onlyNumbersRegex = '^[0-9]{9}$';
  //emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  //nameRegex = '/^(?=.{1,50}$)[a-z]+(?:[\'_.\\s][a-z]+)*$/i';

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
  showCustomerForm = false;
  selectedYear = '';
  value;
  isCheckboxChecked = false;
  listVehicle;
  temp: number;
  temp1;
  temp2;

  constructor(private vehicleService: VehicleService) {
  }

  onCustomerTypeChange(){
    if(this.leaseForm.get('customerType').value == 'Private') {
      console.log(1);
      this.leaseForm.get('assetPrice').clearValidators();
      this.leaseForm.get('assetPrice').setValidators([Validators.min(5000), Validators.required, Validators.pattern(this.validationRegex)]);
      // this.leaseForm.get('assetPrice').setValidators([Validators.min(5000), Validators.required, Validators.pattern(this.validationRegex)]);
       console.log( this.leaseForm.get('assetPrice').validator);
       this.leaseForm.get('assetPrice').updateValueAndValidity();
    }
    else{
      console.log(2);
      this.leaseForm.get('assetPrice').clearValidators();
      this.leaseForm.get('assetPrice').setValidators([Validators.min(10000), Validators.required, Validators.pattern(this.validationRegex)]);
      //this.leaseForm.get('assetPrice').setValidators([Validators.min(10000), Validators.required, Validators.pattern(this.validationRegex)]);
      console.log( this.leaseForm.get('assetPrice').validator);
      this.leaseForm.get('assetPrice').updateValueAndValidity();
    }
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
      'enginePower': new FormControl(null, [Validators.required, Validators.pattern(this.validationRegex),
        Validators.min(1)]),
      'assetPrice': new FormControl(null, [Validators.required, Validators.pattern(this.validationRegex)]),
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

    this.privateForm = new FormGroup({'firstName': new FormControl(null, [Validators.required, Validators.pattern(this.nameRegex)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(this.nameRegex)]),
      'personalID': new FormControl(null, [Validators.required, Validators.pattern(this.personalIDRegex)]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern(this.phoneNumberRegex)]),
      'street': new FormControl(null, [Validators.required, Validators.pattern(this.streetRegex)]),
      'city': new FormControl(null, [Validators.required, Validators.pattern(this.cityRegex)]),
      'postCode': new FormControl(null, [Validators.required, Validators.pattern(this.postCodeRegex)]),
      'country': new FormControl(null, [Validators.required, Validators.pattern(this.cityRegex)]),
      'checkbox': new FormControl(null, Validators.required)});


    // Business customer form
    this.businessCustomerForm = new FormGroup({
      'companyName': new FormControl(null, [Validators.required,
        Validators.pattern(this.lithuanianRegex)]),
      'companyCode': new FormControl(null, [Validators.required,
        Validators.pattern(this.onlyNumbersRegex)]),
      'email': new FormControl(null, [Validators.email,
        Validators.required, Validators.pattern(this.emailRegex)]),
      'phoneNumber': new FormControl(null, [Validators.required,
        Validators.pattern(this.phoneNumberRegex)]),
      'street': new FormControl(null, [Validators.required,
        Validators.pattern(this.streetRegex)]),
      'city': new FormControl(null, [Validators.required,
        Validators.pattern(this.cityRegex)]),
      'postCode': new FormControl(null, [Validators.required,
        Validators.pattern(this.postCodeRegex)]),
      'country': new FormControl(null, [Validators.required,
        Validators.pattern(this.cityRegex)])
    });
    //

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
      if (data['groupValue'] === brand) {
        this.modelsBySelectedBrand.push(data['text']);
      }
    });
  }

  goBackToForm1() {
    this.showFormSummary = false;
    this.showForm = true;
  }

  goNextToForm2() {
    this.showFormSummary = false;
    this.showCustomerForm = true;
  }

  goToSummary() {
    this.showFormSummary = true;
    this.showForm = false;
    this.changeScrollValue = false;
  }

  goBackToSummary() {
    this.showCustomerForm = false;
    this.showFormSummary = true;
  }

  pitch(event: any) {
    this.rangeValue = event.value;

  }

  submit() {
    this.showOK = true;
    this.showCustomerForm = false;
  }

  onChanges() {
    // this.leaseForm.get('advancePaymentPercentage').valueChanges.subscribe(val => {
    //   if (this.leaseForm.get('advancePaymentPercentage').valid) {
    //     this.value = this.leaseForm.get('assetPrice').value * (parseFloat(val) / 100);
    //     this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
    //   } else {
    //     this.leaseForm.get('advancePaymentAmount').patchValue('');
    //   }
    // });
    this.leaseForm.get('assetPrice').valueChanges.subscribe(val => {
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
          this.leaseForm.get('advancePaymentAmount').patchValue('');
        }
      } else {
        this.leaseForm.get('contractFee').patchValue(200);
        this.leaseForm.get('advancePaymentAmount').patchValue('');
      }
    });
  }

  test() {
    // this.value = this.leaseForm.get('assetPrice').value * (parseFloat(this.leaseForm.get('advancePaymentAMount').value) * 100);
    // console.log(this.leaseForm.get('assetPrice').value);
    // console.log(this.value);
    // this.leaseForm.get('advancePaymentPercentage').patchValue(this.value);
    if (this.advancePaymentPercentage < 10 && this.advancePaymentPercentage > 100) {
      this.advancePaymentAmount = this.assetPrice * (10 / 100);
    } else {
      this.advancePaymentAmount = this.assetPrice * (this.advancePaymentPercentage / 100);
    }
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
