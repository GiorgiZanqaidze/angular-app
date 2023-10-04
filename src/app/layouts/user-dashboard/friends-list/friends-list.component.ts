import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {DashboardServicesService} from "../dashboard-services.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit{

  user: any = {
      id: 1,
      name: 'giorgir'
  }

  public friends!: (User[])


  constructor(private dashboardService: DashboardServicesService) {
  }

  ngOnInit() {
    this.dashboardService.getUsers().subscribe((friends: any) => {
      this.friends = friends
    })

  }


}
