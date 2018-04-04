import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {LeaseStatusComponent} from './lease-status/lease-status.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './_guards';
import {LeasingOfficerComponent} from './leasing-officer/leasing-officer.component';



const routes: Routes = [
  {path: 'leasingOfficer', component: LeasingOfficerComponent, canActivate: [AuthGuard] },
  {path: 'leaseForm', component: LeasingApplicationComponent},
  {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
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
