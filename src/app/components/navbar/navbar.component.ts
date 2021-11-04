import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
