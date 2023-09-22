import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { LoginComponent } from './guest-layout/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './guest-layout/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    LoginComponent,
    SignUpComponent,
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
