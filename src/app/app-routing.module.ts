import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestLayoutComponent} from "./layouts/guest-layout/guest-layout.component";
import {LoginComponent} from "./layouts/guest-layout/login/login.component";
import {SignUpComponent} from "./layouts/guest-layout/sign-up/sign-up.component";
import {UserDashboardComponent} from "./layouts/user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'guest/login',
    pathMatch: 'full'
  },
  {
    path: "guest",
    redirectTo: 'guest/login',
  },
  {
    path: 'guest',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'authorized/dashboard',
    component: UserDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
