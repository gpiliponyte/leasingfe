import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {LeaseStatusComponent} from './lease-status/lease-status.component';

const routes: Routes = [
  {path: 'leaseForm', component: LeasingApplicationComponent},
  {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: '', redirectTo: '/leaseForm', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
