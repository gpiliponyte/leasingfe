import { Injectable } from '@angular/core';

@Injectable()
export class LeasingOfficerServiceService {
  leaseObject;
  customerObject;
  leaseInfo;

  constructor() { }

  leases = {
    customerType: this.leaseObject.customerType,
    assetType: this.leaseObject.assetType,
  };

}
