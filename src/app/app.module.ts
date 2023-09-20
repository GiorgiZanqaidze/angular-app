import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { LoginComponent } from './guest-layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
