import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardVoucherRoutingModule } from './standard-voucher-routing.module';
import { StandardVoucherComponent } from './standard-voucher.component';

@NgModule({
  imports: [
    CommonModule,
    StandardVoucherRoutingModule
  ],
  declarations: [StandardVoucherComponent]
})
export class StandardVoucherModule { }
