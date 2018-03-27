import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LeaseService {

  leaseObject;
  customerObject;

  constructor(private http: HttpClient) { }

  submitLease() {
    const lease = {
      customerType: this.leaseObject.customerType,
      assetType: this.leaseObject.assetType,
      brand: this.leaseObject.vehicleBrand,
      model: this.leaseObject.model,
      year: this.leaseObject.year,
      enginePower: this.leaseObject.enginePower,
      assetPrice: this.leaseObject.assetPrice,
      advancePaymentPercentage: this.leaseObject.advancePaymentPercentage,
      advancePaymentAmount: this.leaseObject.advancePaymentAmount,
      leasePeriod: this.leaseObject.leasePeriod,
      margin: this.leaseObject.margin,
      contractFee: this.leaseObject.contractFee,
      paymentDate: this.leaseObject.paymentDate,
      companyName: this.customerObject.companyName,
      companyCode: this.customerObject.companyCode,
      firstName: this.customerObject.firstName,
      lastName: this.customerObject.lastName,
      idCode: this.customerObject.idCode,
      email: this.customerObject.email,
      phoneNumber: this.customerObject.phoneNumber,
      street: this.customerObject.street,
      city: this.customerObject.city,
      postCode: this.customerObject.postCode,
      country: this.customerObject.country
    };

    return this.http
      .post('http://localhost:8080/addLease', lease)
      .toPromise();
  }
}