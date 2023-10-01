import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {User} from "../../../services/user.interface";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private APIService: ApiService) {
  }


  signUp: FormGroup = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required])
  })

  onSubmit() {
    const userData: User = this.signUp.value
    this.APIService.registerUser(userData).subscribe((res) => {
      console.log(res)
    })

  }
}
