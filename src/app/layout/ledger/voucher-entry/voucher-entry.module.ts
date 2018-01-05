import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherEntryRoutingModule } from './voucher-entry-routing.module';
import { VoucherEntryComponent } from './voucher-entry.component';

@NgModule({
  imports: [
    CommonModule,
    VoucherEntryRoutingModule
  ],
  declarations: [VoucherEntryComponent]
})
export class VoucherEntryModule { }
