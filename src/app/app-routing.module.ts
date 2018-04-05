import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {LeaseStatusComponent} from './lease-status/lease-status.component';
import {LoginComponent} from './login/login.component';
import {LeasingOfficerComponent} from './leasing-officer/leasing-officer.component';
import {AuthGuard} from './core/auth.guard';

const routes: Routes = [
  {path: 'leaseForm', component: LeasingApplicationComponent},
  {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'leasingOfficer', component: LeasingOfficerComponent, canActivate: [AuthGuard]},
  // {path: 'home', component: HomeComponent},
  // {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: '', redirectTo: 'leaseForm', pathMatch: 'full'},
  {path: 'leaseForm/leaseStatus', redirectTo: 'leaseStatus', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
