import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoginModel} from "../../models/auth/LoginModel";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  saveSession: boolean = false;
  isLoading = false;
  errorMessage = null;

  //@ts-ignore
  loginModel: LoginModel;

  loginForm = new FormBuilder().group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
  });

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit() {
    this.loginForm.valueChanges
      .subscribe(value => {
        this.loginModel = value;
      })
  }

  submit() {
    this.isLoading = true;
    this.errorMessage = null;
    this.authService.login(this.loginModel)
      .subscribe((res: any) => {
        const token = res.token;
        this.authService.saveToken(token);
      }, (res: any) => {
        console.log(res);
        this.errorMessage = res.error.message;
      }, () =>{
        this.router.navigateByUrl("/",);
      }).add(() => {
        this.isLoading = false;
    })
  }
}
