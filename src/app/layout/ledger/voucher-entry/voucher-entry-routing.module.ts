import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherEntryComponent } from './voucher-entry.component';

const routes: Routes = [
  {
    path: '', component: VoucherEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherEntryRoutingModule { }
