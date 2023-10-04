import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.interface";
import {map} from "rxjs";
import axiosInstance from "../config/axios";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient, private router:Router) { }

  user!: User


  registerUser(user: User) {
    return this.http.post("/api/register", user, {
      withCredentials: true,
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
    return this.http.get(`/api/user`, {
      withCredentials: true,
    }).pipe(map((user: any) => {
      this.user = user
      return user
    }))
  }



}
