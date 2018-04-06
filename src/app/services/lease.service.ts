import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LeaseService {

  leaseObject;
  customerObject;
  response;
  listOfLeases;
  leaseInfo;

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
      personalCode: this.customerObject.personalCode,
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

  getLeaseByUniqueId(id: string) {
    return this.http
      .get('http://localhost:8080/uniqueId/' + id)
      .toPromise();
  }

  getAllPendingLeases() {
      return this.http
      .get('http://localhost:8080/leaseStatus/' + 'pending')
      .toPromise();
  }

  getAllApprovedLeases() {
      return this.http
        .get('http://localhost:8080/leaseStatus/' + 'approved')
        .toPromise();
  }

  getAllDeniedLeases() {
      return this.http
        .get('http://localhost:8080/leaseStatus/' + 'denied')
        .toPromise();
  }
  getAllLeases() {
      return this.http
        .get('http://localhost:8080/')
        .toPromise();
  }
  // getAllLeasesByStatus() {
  //   // if (status === 'pending') {
  //     return this.http
  //       .get('http://localhost:8080/leaseStatus' + status)
  //       .toPromise();
  //   // }
  // }
}
