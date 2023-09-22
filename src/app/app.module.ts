import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { LoginComponent } from './layouts/guest-layout/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './layouts/guest-layout/sign-up/sign-up.component';
import { UserDashboardComponent } from './layouts/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    LoginComponent,
    SignUpComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
