import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestLayoutComponent} from "./layouts/guest-layout/guest-layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {UserDashboardComponent} from "./layouts/user-dashboard/user-dashboard.component";
import {FriendChatComponent} from "./layouts/user-dashboard/friend-chat/friend-chat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'guest/login',
    pathMatch: 'full',
  },
  {
    path: 'guest',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      }
    ]
  },
  {
    path: 'authorized/dashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: ':id',
        component: FriendChatComponent,
      }
    ]
  },

  {
    path: "**",
    redirectTo: "guest/login",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
