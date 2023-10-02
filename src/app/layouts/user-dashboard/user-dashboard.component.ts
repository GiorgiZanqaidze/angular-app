import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {User} from "../../services/user.interface";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  constructor(private http: HttpClient,
              private service: ApiService
  ) {}

  user!: any


  ngOnInit() {
    this.service.getAuthUser().subscribe(res => {
      this.user = res
    })
  }


}
