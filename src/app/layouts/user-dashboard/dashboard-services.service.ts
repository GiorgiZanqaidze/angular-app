import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./user";
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  constructor(
    private http: HttpClient,
    private service: ApiService

  ) { }



  getUsers() {
    return this.http.get('/api/users/all', {withCredentials: true})
  }

  getChatMessages(receiver_id: any) {
    const sender_id: any = this.service.user.id
    console.log(sender_id, receiver_id)
    const receiver = parseInt(receiver_id)
    return this.http.get('/api/chat-messages', {withCredentials: true, params: {receiver_id, receiver}})
  }
}
