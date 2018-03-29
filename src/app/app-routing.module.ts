import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeasingApplicationComponent} from './leasing-application/leasing-application.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'leaseForm', component: LeasingApplicationComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'leaseStatus', component: LeaseStatusComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
