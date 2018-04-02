import { Component, OnInit } from '@angular/core';
import {LeaseService} from '../../services/lease.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  constructor(public leaseService: LeaseService) { }

  ngOnInit() {
  }



}
