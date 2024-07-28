import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AppRequestInterceptor } from './interceptors/app-request.interceptor';
import { AuthActivateRouteGuard } from './routeguards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { AccountComponent } from './components/account/account.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    NoticesComponent,
    LogoutComponent,
    AccountComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AppRequestInterceptor,
      multi : true
    },AuthActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
