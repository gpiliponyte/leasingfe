import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-private-form',
  templateUrl: './private-form.component.html',
  styleUrls: ['./private-form.component.css']
})
export class PrivateFormComponent implements OnInit {

  privateForm: FormGroup;
  emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
  postCodeRegex = '[LT]{2}\\d{5}';
  streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
  phoneNumberRegex = '^[0-9]{11}';
  personalIDRegex = '^[3-6][0-9]{2}[0,1][0-9][0-9]{2}[0-9]{4}$';
  nameRegex = '^[a-zA-ZąčęėįųūšžĄČĖĘĮŲŪČŠŽ ,.\'-]+$';
  showErrorMessages = false;
  isCheckboxChecked = false;

  @Input() showElement;

  constructor(protected vehicleService: VehicleService) { }

  ngOnInit() {

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
  }

  @Output() privateSubmitted = new EventEmitter<Object>();
  @Output() privateBackToSummary = new EventEmitter<Object>();

  submit() {
    if (this.privateForm.valid && this.isCheckboxChecked) {
      const privateCustomerObject = {
        firstName: this.privateForm.get('firstName').value,
        lastName: this.privateForm.get('lastName').value,
        email: this.privateForm.get('email').value,
        phoneNumber: this.privateForm.get('phoneNumber').value,
        street: this.privateForm.get('street').value,
        city: this.privateForm.get('city').value,
        postCode: this.privateForm.get('postCode').value,
        country: this.privateForm.get('country').value
      };
      this.vehicleService.customerObject = privateCustomerObject;
      this.privateSubmitted.emit();
    }

    else {
      this.showErrorMessages = true;
    }
  }

  goBackToSummary() {
    // this.vehicleService.firstName;
    // this.vehicleService.lastName;
    // this.vehicleService.privateEmail;
    // this.vehicleService.privatePhoneNumber;
    // this.vehicleService.privateStreet;
    // this.vehicleService.privateCity;
    // this.vehicleService.privatePostCode;
    // this.vehicleService.privateCountry;
    this.privateBackToSummary.emit();
  }

}
