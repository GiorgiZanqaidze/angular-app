import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';


  constructor(
      private apiService: ApiService,
      private http: HttpClient,
      private router: Router) {

  }


  ngOnInit() {

  }

}
