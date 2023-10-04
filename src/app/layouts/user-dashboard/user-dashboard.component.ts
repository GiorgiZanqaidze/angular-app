import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {DashboardServicesService} from "./dashboard-services.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
})
export class UserDashboardComponent implements OnInit{

  constructor(
              private service: ApiService,
              private dashboardService: DashboardServicesService,
              private route: ActivatedRoute
  ) {

  }

  user!: any



  ngOnInit() {
    this.service.getAuthUser().subscribe(res => {
      this.user = res
    })

  }




}
