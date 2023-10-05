import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DashboardServicesService} from "../dashboard-services.service";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-friend-chat',
  templateUrl: './friend-chat.component.html',
  styleUrls: ['./friend-chat.component.css']
})
export class FriendChatComponent implements OnInit{



  constructor(
    private dashboardService: DashboardServicesService,
    private route: ActivatedRoute
  ) {

  }

  messages!: Array<object>


  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        const id: any | null = params.get('id');
        this.dashboardService.getChatMessages(id).subscribe(res => console.log(res));
      } else {
        console.log('dsds')
      }
    });

  }


}
