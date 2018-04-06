import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-decline-module',
  templateUrl: './decline-module.component.html',
  styleUrls: ['./decline-module.component.css']
})
export class DeclineModuleComponent implements OnInit {

  public onClose: Subject<boolean>;

  constructor(private _bsModalRef: BsModalRef) {

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
