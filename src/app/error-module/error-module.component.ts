import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-module',
  templateUrl: './error-module.component.html',
  styleUrls: ['./error-module.component.css']
})
export class ErrorModuleComponent implements OnInit {

  public onClose: Subject<boolean>;

  constructor(private _bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public onOkay(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
  }

}
