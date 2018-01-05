import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [CommonModule, SignupRoutingModule, FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()],
  declarations: [SignupComponent]
})
export class SignupModule { }
