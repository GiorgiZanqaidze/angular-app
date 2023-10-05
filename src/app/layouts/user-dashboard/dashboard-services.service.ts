import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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

  getChatMessages(receiver_id: number) {
    let sender_id!: number
    const authUser = this.service.user
    console.log(authUser)
    if (!authUser) {
      this.service.getAuthUser().subscribe(user => {
        sender_id = user.id
      })
    } else {
      // console.log(authUser)
      sender_id = 11
    }



    return this.http.get('/api/chat-messages', {withCredentials: true, params: {receiver_id, sender_id}})
  }
}
