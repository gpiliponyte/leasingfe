import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeasingFormComponent } from './leasing-form/leasing-form.component';
import { VehicleService } from './services/vehicle.service';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {LeaseFormComponent} from './leasing-application/lease-form/lease-form.component';
import {LeaseSummaryComponent} from './leasing-application/lease-summary/lease-summary.component';
import {BusinessFormComponent} from './leasing-application/business-form/business-form.component';
import {ConfirmationPageComponent} from './leasing-application/confirmation-page/confirmation-page.component';
import {PrivateFormComponent} from './leasing-application/private-form/private-form.component';
import {LeaseService} from './services/lease.service';
import {ErrorModuleComponent} from './leasing-application/error-module/error-module.component';
import {LeaseStatusComponent} from './lease-status/lease-status.component';
import {ScheduleService} from './services/schedule.service';


@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    LeasingFormComponent,
    LeasingApplicationComponent,
    LeaseFormComponent,
    LeaseSummaryComponent,
    BusinessFormComponent,
    ConfirmationPageComponent,
    PrivateFormComponent,
    ErrorModuleComponent,
    LeaseStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [VehicleService, LeaseService, ScheduleService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorModuleComponent]
})
export class AppModule { }
