import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginModel} from "../../models/auth/LoginModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  //@ts-ignore
  model: LoginModel = {}

  saveSession: boolean = false;

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  submit() {
    this.authService.login(this.model)
      .subscribe((res: any) => {
        const token = res.token;
        this.authService.saveToken(token);
        this.router.navigateByUrl("/");
      }, () => {
        alert("error");
      })
  }

}
