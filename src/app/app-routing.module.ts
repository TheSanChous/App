import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GroupsPageComponent} from "./components/groups-page/groups-page.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {GroupCreateComponent} from "./components/groups-page/group-create/group-create.component";
import {GroupJoinComponent} from "./components/groups-page/group-join/group-join.component";

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
      },
      {
        path: "groups/create",
        component: GroupCreateComponent,
      },
      {
        path: "groups/join",
        component: GroupJoinComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
