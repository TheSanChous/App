import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GroupsPageComponent } from './components/groups-page/groups-page.component';
import {TokenInterceptor} from "./services/token.interceptor";
import { GroupsListComponent } from './components/groups-page/groups-list/groups-list.component';
import { GroupCreateComponent } from './components/groups-page/group-create/group-create.component';
import { GroupJoinComponent } from './components/groups-page/group-join/group-join.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    GroupsPageComponent,
    GroupsListComponent,
    GroupCreateComponent,
    GroupJoinComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
