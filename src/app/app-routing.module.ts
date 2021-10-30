import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GroupsPageComponent} from "./components/groups-page/groups-page.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent, data: {title: "Login"} },
  { path: "registration", component: RegistrationComponent, data: {title: "Registration"} },
  {
    path: "",
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: "groups",
        component: GroupsPageComponent,
        data: { title: "My Groups" }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
