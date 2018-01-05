import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'GeneralLedger/Vouchers', loadChildren: './ledger/voucher-entry/voucher-entry.module#VoucherEntryModule' },
            { path: 'GeneralLedger/StandardVouchers', loadChildren: './ledger/standard-voucher/standard-voucher.module#StandardVoucherModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
