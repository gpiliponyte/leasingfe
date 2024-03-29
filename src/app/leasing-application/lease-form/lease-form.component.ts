import {Component, EventEmitter, Input, OnInit, Output,Inject,HostListener} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../../services/vehicle.service';
import {LeaseService} from '../../services/lease.service';
import {ScheduleService} from '../../services/schedule.service';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-lease-form',
  templateUrl: './lease-form.component.html',
  styleUrls: ['./lease-form.component.css']
})
export class LeaseFormComponent implements OnInit {

  leaseForm: FormGroup;
  validationRegex = '^([1-9])\\d*(?:\\.\\d{1,2})?\\s*$';
  listVehicle;
  brands;
  customerTypes = ['Private', 'Business'];
  assetTypes = ['New', 'Used'];
  paymentDates = [15, 30];
  years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  selectedBrand;
  selectedModel;
  selectedYear;
  value;
  temp: number;
  temp1;
  temp2;
  modelsBySelectedBrand;
  showErrorMessages = false;
  financingAmount;
  totalInterest;
  totalMonthlyPayment;
  showCalculation = false;
  showBorderLine = false;
  scheduleResponse;
  calculationResponse;
  showPreliminarySchedule = false;
  showScheduleBorderLine = false;
 

  @Input() showElement;
  @Input() resetModels;

  constructor(public vehicleService: VehicleService, public leaseService: LeaseService, public scheduleService: ScheduleService, @Inject(DOCUMENT) private doc: Document) {
  }

  ngOnInit() {
    this.leaseForm = new FormGroup({
      'customerType': new FormControl(null, Validators.required),
      'assetType': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'enginePower': new FormControl(null, [Validators.required, Validators.pattern(this.validationRegex),
        Validators.min(10), Validators.max(1000)]),
      'assetPrice': new FormControl(null, [Validators.required, Validators.max(1000000), Validators.pattern(this.validationRegex)]),
      'advancePaymentPercentage': new FormControl(10,
        [Validators.required, Validators.pattern(this.validationRegex), Validators.max(30),
          Validators.min(10)]),
      'advancePaymentAmount': new FormControl(null, [Validators.pattern(this.validationRegex), Validators.required]),
      'leasePeriod': new FormControl(6, Validators.required),
      'margin': new FormControl(3.2,
        [Validators.required, Validators.pattern(this.validationRegex), Validators.max(100),
          Validators.min(1), Validators.max(25)]),
      'contractFee': new FormControl(200, Validators.required),
      'paymentDate': new FormControl(null, Validators.required)
    });

    this.loadVehicles();
    this.onChanges();
  }

  getCarModelsByBrand(brand) {
    this.vehicleService.changeScrollValue ? this.selectedModel = '' : this.vehicleService.changeScrollValue = true;
    this.modelsBySelectedBrand = [];
    if (this.listVehicle != null) {
      this.listVehicle.forEach(data => {
        if (data['groupValue'] === brand) {
          this.modelsBySelectedBrand.push(data['text']);
        }
      });
    }
  }

  onCustomerTypeChange() {
    if (this.leaseForm.get('customerType').value === 'Private') {
      this.leaseForm.get('assetPrice').clearValidators();
      this.leaseForm.get('assetPrice')
        .setValidators([Validators.min(5000), Validators.max(1000000), Validators.required, Validators.pattern(this.validationRegex)]);
      this.leaseForm.get('assetPrice').updateValueAndValidity();
    } else {
      this.leaseForm.get('assetPrice').clearValidators();
      this.leaseForm.get('assetPrice')
        .setValidators([Validators.min(10000), Validators.max(1000000), Validators.required, Validators.pattern(this.validationRegex)]);
      this.leaseForm.get('assetPrice').updateValueAndValidity();
    }
  }


  loadVehicles() {
    this.vehicleService.getAllVehicleInfo()
      .then(data => {
        this.listVehicle = data;
        const temp = [];
        this.listVehicle.forEach((data) => temp.push(data['groupValue']));
        this.brands = Array.from(new Set(temp));
      });
  }

  @Output() nextToSummary = new EventEmitter<Object>();

  goToSummary() {
    if (this.leaseForm.valid) {
      this.showErrorMessages = false;
      const leaseFormObject = {
        customerType: this.leaseForm.get('customerType').value,
        assetType: this.leaseForm.get('assetType').value,
        vehicleBrand: this.leaseForm.get('brand').value,
        model: this.leaseForm.get('model').value,
        year: this.leaseForm.get('year').value,
        enginePower: this.leaseForm.get('enginePower').value,
        assetPrice: this.leaseForm.get('assetPrice').value,
        advancePaymentPercentage: this.leaseForm.get('advancePaymentPercentage').value,
        advancePaymentAmount: this.leaseForm.get('advancePaymentAmount').value,
        leasePeriod: this.leaseForm.get('leasePeriod').value,
        margin: this.leaseForm.get('margin').value,
        contractFee: this.leaseForm.get('contractFee').value,
        paymentDate: this.leaseForm.get('paymentDate').value,
      };

      this.leaseService.leaseObject = leaseFormObject;
      this.nextToSummary.emit();
    } else {
      this.showErrorMessages = true;
    }
  }

  onChanges() {
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

  keyUpAdvancePaymentAmount() {
    if (this.leaseForm.get('advancePaymentPercentage').valid) {
      this.value = this.leaseForm.get('assetPrice').value * (this.leaseForm.get('advancePaymentPercentage').value / 100);
      this.leaseForm.get('advancePaymentAmount').patchValue(this.value.toFixed(2));
    } else {
      this.leaseForm.get('advancePaymentAmount').patchValue('');
    }
  }

  keyUpAdvancePaymentPercentage() {
    this.temp2 = this.leaseForm.get('advancePaymentAmount').value;
    this.temp = ((this.leaseForm.get('advancePaymentAmount').value / this.leaseForm.get('assetPrice').value) * 100);
    this.temp1 = (this.leaseForm.get('assetPrice').value * 0.1);
    if (this.temp <= 100 || this.temp >= 10) {
      this.leaseForm.get('advancePaymentPercentage').setValue(this.temp.toFixed(2));
    }
    if (this.temp > 100 || this.temp < 10) {
      this.leaseForm.get('advancePaymentPercentage').setValue(10);
      this.leaseForm.get('advancePaymentAmount').setValue(this.temp1.toFixed(2));
    }
  }

  getPreliminarySchedule() {
    this.scheduleService.getSchedule(this.leaseForm.get('advancePaymentAmount').value,
      this.leaseForm.get('assetPrice').value, new Date(), this.leaseForm.get('leasePeriod').value,
      this.leaseForm.get('paymentDate').value, this.leaseForm.get('margin').value).then( data => {
      this.scheduleResponse = data;
      this.showPreliminarySchedule = true;
    }, error => {
        this.showPreliminarySchedule = false;
    });
  }

  calculatePreliminaryLeasingAmount() {
    this.financingAmount = parseFloat(this.leaseForm.get('assetPrice').value)
      - parseFloat(this.leaseForm.get('advancePaymentAmount').value);
    this.scheduleService.getSchedule(this.leaseForm.get('advancePaymentAmount').value,
      this.leaseForm.get('assetPrice').value, new Date(), this.leaseForm.get('leasePeriod').value,
      '30', this.leaseForm.get('margin').value).then( data => {
      this.totalMonthlyPayment = data[0].totalPaymentAmount;
      this.totalInterest = (parseFloat(this.leaseForm.get('leasePeriod').value) * parseFloat(this.totalMonthlyPayment))
        - parseFloat(this.financingAmount);
      this.totalMonthlyPayment = this.totalMonthlyPayment.toFixed(2);
      this.totalInterest = this.totalInterest.toFixed(2);
      this.financingAmount = this.financingAmount.toFixed(2);
      this.showCalculation = true;
    }, error => {
    });
  }

  showBorder() {
    this.showBorderLine = true;
  }

  showScheduleBorder() {
    this.showScheduleBorderLine = true;
  }


  public fixed: boolean = false; 

        //  constructor(@Inject(DOCUMENT) private doc: Document) {}
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //    let num = this.doc.body.scrollTop;
  //    if ( num > 5 ) {
  //        this.fixed = true;
  //    }else if (this.fixed && num < 5) {
  //        this.fixed = false;
  //    }
  // }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const number = $event.target.scrollTop;
    if (number > 10) {
      this.fixed = true;
    } else if (this.fixed && number < 10) {
      this.fixed = false;
    }
    console.log(this.fixed);
  }
}
