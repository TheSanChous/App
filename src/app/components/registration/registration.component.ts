import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RegistrationModel} from "../../models/auth/RegistrationModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  //@ts-ignore
  model: RegistrationModel = {}

  saveSession: boolean = false;

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  submit() {
    this.authService.registration(this.model)
      .subscribe((res: any) => {
        const token = res.token;
        this.authService.saveToken(token);
        this.router.navigateByUrl("/");
      }, () => {
        alert("error");
      });
  }

}
