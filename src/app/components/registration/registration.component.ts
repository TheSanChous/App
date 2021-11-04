import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RegistrationModel} from "../../models/auth/RegistrationModel";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  errorMessage = null;
  saveSession: boolean = false;
  isLoading = false;
  //@ts-ignore
  model: RegistrationModel = {}
  registrationForm = new FormBuilder().group({
    firstName: ['', Validators.compose([Validators.required, Validators.min(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.min(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.min(4)])],
  })

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit() {
    this.registrationForm.valueChanges
      .subscribe(value => {
        this.model = value;
      })
  }

  submit() {
    this.isLoading = true;
    this.authService.registration(this.model)
      .subscribe((res: any) => {
        const token = res.token;
        this.authService.saveToken(token);
      }, res => {
        this.errorMessage = res.error.message;
      }, () => {
        this.router.navigateByUrl("/");
      }).add(() => {
        this.isLoading = false;
    });
  }
}
