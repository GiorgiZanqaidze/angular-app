import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginUser, User} from "./user.interface";
import {map, Observable} from "rxjs";
import axiosInstance from "../config/axios";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient, private router:Router) { }

  registerUser(user: User) {
    return this.http.post('http://localhost:8000/api/register', user, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }

  async login(loginData: any) {
    try {
      await axiosInstance.get('/sanctum/csrf-cookie')
      const response = await axiosInstance.post('/api/login', loginData)
      return response
    } catch (error) {
      return error
    }
  }

  getAuthUser() {
    return this.http.get('http://localhost:8000/api/user', {
      withCredentials: true,
    }).pipe(map((user) => {
      return !!user
    }))
  }



}
