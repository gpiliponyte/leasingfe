import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleService} from '../../services/vehicle.service';

@Component({
  selector: 'app-lease-summary',
  templateUrl: './lease-summary.component.html',
  styleUrls: ['./lease-summary.component.css']
})
export class LeaseSummaryComponent implements OnInit {

  @Output() backToForm1 = new EventEmitter<Object>();
  @Output() nextToForm2  = new EventEmitter<Object>();

  constructor(protected vehicleService: VehicleService) { }

  ngOnInit() {
  }

  goBackToForm1() {
    this.backToForm1.emit();
}

  goNextToForm2() {
    this.nextToForm2.emit();
}

}
