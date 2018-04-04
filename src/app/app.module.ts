import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {AuthGuard} from './_guards/auth.guard';
import {AlertComponent} from './_directives/alert.component';
import {LeasingOfficerComponent} from './leasing-officer/leasing-officer.component';





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
    LeaseStatusComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    LeasingOfficerComponent
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
  providers: [VehicleService,
    LeaseService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
    ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorModuleComponent]
})
export class AppModule { }
