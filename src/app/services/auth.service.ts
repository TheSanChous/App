import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/auth/LoginModel";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { RegistrationModel } from '../models/auth/RegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.ApiUrl + "/Auth";

  constructor(private readonly http: HttpClient) { }

  login(login: LoginModel): Observable<{}> {
    return this.http.post(this.url + "/login", login);
  }

  registration(registration: RegistrationModel): Observable<{}> {
    return this.http.post(this.url + "/register", registration);
  }

  logout() {
    localStorage.removeItem("auth_token");
  }

  saveToken(token: string) {
    localStorage.setItem("auth_token", token);
  }
}
