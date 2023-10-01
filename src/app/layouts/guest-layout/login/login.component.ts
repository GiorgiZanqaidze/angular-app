import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import axiosInstance from "../../../config/axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(
      private service: ApiService,
      private router: Router
  ) {

  }

  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required)
  });

  async onSubmit() {
    const userData: any = this.loginForm.value;
    await this.service.login(userData)
    this.router.navigate(['authorized/dashboard'])

  }

  ngOnInit() {
  }
}
