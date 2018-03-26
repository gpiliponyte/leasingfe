import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lease-summary',
  templateUrl: './lease-summary.component.html',
  styleUrls: ['./lease-summary.component.css']
})
export class LeaseSummaryComponent implements OnInit {

  @Input() lease;

  constructor() { }

  ngOnInit() {
  }


  @Output() backToForm1 = new EventEmitter<Object>();
  @Output() nextToForm2  = new EventEmitter<Object>();

  goBackToForm1() {
    this.backToForm1.emit();
}

  goNextToForm2() {
    this.nextToForm2.emit();
}

}
