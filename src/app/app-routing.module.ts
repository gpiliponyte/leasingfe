import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {LeaseStatusComponent} from './lease-status/lease-status.component';
import {LoginComponent} from './login/login.component';
import {LeasingOfficerComponent} from './leasing-officer/leasing-officer.component';
import {AuthGuard} from './core/auth.guard';
import {LeasingSummaryComponent} from './leasing-officer/leasing-summary/leasing-summary.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'leasingOfficer', component: LeasingOfficerComponent, canActivate: [AuthGuard]},
  {path: 'leasingOfficer/leasingSummary/:uniqueId', component: LeasingSummaryComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'leaseForm', component: LeasingApplicationComponent},
  {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'home', component: HomeComponent},
  // {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'leaseForm/leaseStatus', redirectTo: 'leaseStatus', pathMatch: 'full'},
  {path: 'home/leaseForm', redirectTo: 'leaseForm', pathMatch: 'full'},
  {path: 'home/leaseStatus', redirectTo: 'leaseStatus', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
