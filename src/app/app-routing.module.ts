import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestLayoutComponent} from "./guest-layout/guest-layout.component";
import {LoginComponent} from "./guest-layout/login/login.component";
import {SignUpComponent} from "./guest-layout/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'guest/login',
    pathMatch: 'full'
  },
  {
    path: 'guest',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
