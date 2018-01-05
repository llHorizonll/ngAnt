import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgPipesModule } from 'ngx-pipes';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgZorroAntdModule.forRoot()],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent]
})
export class LayoutModule { }
