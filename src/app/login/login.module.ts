import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()],
  declarations: [LoginComponent]
})
export class LoginModule { }
