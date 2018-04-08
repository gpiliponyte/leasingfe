import {Component, OnInit} from '@angular/core';
import {LeaseService} from '../../services/lease.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ApproveModuleComponent} from '../approve-module/approve-module.component';
import {DeclineModuleComponent} from '../decline-module/decline-module.component';
import {ScheduleService} from '../../services/schedule.service';

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
  isScheduleError = false;
  scheduleResponse;
  public approveModalRef: BsModalRef;
  public declineModalRef: BsModalRef;

  constructor(private route: ActivatedRoute,  private scheduleService: ScheduleService, private leaseService: LeaseService, private modalService: BsModalService, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['uniqueId'];
      this.leaseService.getLeaseByUniqueId(this.id)
        .then(data => {
          this.response = data;
          this.showSummary = true;
          this.scheduleService.getSchedule
          (this.response.advancePaymentAmount, this.response.assetPrice, this.response.date,
            this.response.leasePeriod, this.response.paymentDate, this.response.margin)
            .then(scheduleData => {
              this.scheduleResponse = scheduleData;
              this.isScheduleError = false;
            }, scheduleError => {
              this.isScheduleError = true;
            });
        });
    });
  }

  approveLease() {
    this.approveModalRef = this.modalService.show(ApproveModuleComponent);
    this.approveModalRef.content.onClose.subscribe(result => {
      if (result) {
        this.response.applicationStatus = 'approved';
        this.leaseService.updateLease(this.response.id, this.response).then(data =>
        {
          this.router.navigateByUrl('/leasingOfficer');
        }, error => {});
      }
    });
  }

  declineLease() {
    this.declineModalRef = this.modalService.show(DeclineModuleComponent);
    this.declineModalRef.content.onClose.subscribe(result => {
      if (result) {
        this.response.applicationStatus = 'denied';
        this.leaseService.updateLease(this.response.id, this.response).then(data =>
        {
          this.router.navigateByUrl('/leasingOfficer');
        }, error => {});
      }
    });
  }
}
