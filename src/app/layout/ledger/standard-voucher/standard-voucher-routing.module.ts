import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardVoucherComponent } from './standard-voucher.component';

const routes: Routes = [
  {
    path: '', component: StandardVoucherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardVoucherRoutingModule { }
