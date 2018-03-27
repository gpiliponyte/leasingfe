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
import {LeaseFormComponent} from './lease-form/lease-form.component';
import {LeaseSummaryComponent} from './lease-summary/lease-summary.component';
import {BusinessFormComponent} from './business-form/business-form.component';
import {ConfirmationPageComponent} from './confirmation-page/confirmation-page.component';
import {PrivateFormComponent} from './private-form/private-form.component';


@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    LeasingFormComponent,
    LeasingApplicationComponent,
    LeaseFormComponent,
    LeaseSummaryComponent,
    BusinessFormComponent,
    ConfirmationPageComponent,
    PrivateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
