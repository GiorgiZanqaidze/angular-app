import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserDashboardComponent } from './layouts/user-dashboard/user-dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseUrlInterceptorService} from "./services/base-url-interceptor.service";
import { ChatsComponent } from './pages/chats/chats.component';
import { FriendsListComponent } from './layouts/user-dashboard/friends-list/friends-list.component';
import { FriendChatComponent } from './layouts/user-dashboard/friend-chat/friend-chat.component';
import { FriendItemComponent } from './layouts/user-dashboard/friend-item/friend-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    LoginComponent,
    SignUpComponent,
    UserDashboardComponent,
    ChatsComponent,
    FriendsListComponent,
    FriendChatComponent,
    FriendItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
