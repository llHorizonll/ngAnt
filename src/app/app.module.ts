import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AlertService, AuthenticationService, JwtInterceptor, Service } from './shared';
import { AlertComponent } from './_directives/alert.component';
import { AppComponent } from './app.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
