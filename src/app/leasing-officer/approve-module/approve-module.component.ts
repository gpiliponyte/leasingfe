import {Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {LeasingOfficerComponent} from '../leasing-officer.component';

@Component({
  selector: 'app-approve-module',
  templateUrl: './approve-module.component.html',
  styleUrls: ['./approve-module.component.css']
})
export class ApproveModuleComponent implements OnInit {

  public onClose: Subject<boolean>;

  constructor(protected leasingOfficer: LeasingOfficerComponent, private _bsModalRef: BsModalRef) {

  }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }

}
