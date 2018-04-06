import {Component, Input, OnInit} from '@angular/core';
import {LeaseService} from '../../services/lease.service';
import {LeasingOfficerServiceService} from '../../services/leasing-officer-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leasing-summary',
  templateUrl: './leasing-summary.component.html',
  styleUrls: ['./leasing-summary.component.css']
})
export class LeasingSummaryComponent implements OnInit {

  id: string;
  private sub: any;
  response;
  showSummary = false;
  constructor(private route: ActivatedRoute, private leaseService: LeaseService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      this.id = params['uniqueId'];
      console.log('CIA YRA ID' + this.id);
      this.leaseService.getLeaseByUniqueId(this.id)
        .then(data => {

          console.log(this.response);
          this.response = data;
          console.log(data);
          console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa');
          this.showSummary=true;
        });
    });
  }

  approveLease(){
    this.response = 'Application is approved';

    this.leaseService.updateLease(this.id, this.response).then(data =>
    {
    }, error => {
    });
  }
  declineLease(){
    this.response = 'Application is declined';
    this.leaseService.updateLease(this.id, this.response).then(data =>
    {
    }, error => {
    });
  }
  // a
  // a
// o
// i
  // leaseInfo1(){
  //   this.leaseInfo.getAllLeases()
  //     .then(data => {
  //       console.log('subscribe')
  //       this.leaseInfo = data;
  //       console.log(data);
  //     });
}
