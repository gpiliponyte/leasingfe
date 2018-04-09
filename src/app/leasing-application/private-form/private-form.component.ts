import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../../services/vehicle.service';
import {LeaseService} from '../../services/lease.service';

@Component({
  selector: 'app-private-form',
  templateUrl: './private-form.component.html',
  styleUrls: ['./private-form.component.css']
})
export class PrivateFormComponent implements OnInit {

  privateForm: FormGroup;
  emailRegex = '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  cityRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\\s]+$';
  postCodeRegex = '[a-zA-Z0-9\\-]*';
  streetRegex = '^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž0-9\\s\\.\\-]+$';
  phoneNumberRegex = '^[0-9]+$';
  personalIDRegex = '^[3-6][0-9]{2}[0,1][0-9][0-9]{2}[0-9]{4}$';
  nameRegex = '^[a-zA-ZąčęėįųūšžĄČĖĘĮŲŪČŠŽ ,.\'-]+$';
  showErrorMessages = false;
  isCheckboxChecked = false;

  @Input() showElement;

  constructor(public vehicleService: VehicleService, public leaseService: LeaseService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
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
        personalCode: this.privateForm.get('personalID').value,
        postCode: this.privateForm.get('postCode').value,
        country: this.privateForm.get('country').value
      };
      this.leaseService.customerObject = privateCustomerObject;
      this.privateSubmitted.emit();
    }

    else {
      this.showErrorMessages = true;
    }
  }

  goBackToSummary() {
    // this.leaseService.firstName;
    // this.leaseService.lastName;
    // this.leaseService.privateEmail;
    // this.leaseService.privatePhoneNumber;
    // this.leaseService.privateStreet;
    // this.leaseService.privateCity;
    // this.leaseService.privatePostCode;
    // this.leaseService.privateCountry;
    this.privateBackToSummary.emit();
  }

}
