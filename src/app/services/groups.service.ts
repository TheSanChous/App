import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {GroupModel} from "../models/special/groupModel";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  url = environment.ApiUrl + "/Groups";

  constructor(private readonly http: HttpClient) { }

  getGroups(): Observable<GroupModel[]> {
    return this.http.get<GroupModel[]>(this.url + "/all");
  }

  createGroup(group: GroupModel): Observable<{}> {
    return this.http.post(this.url + "/create", group);
  }

  joinGroup(groupIdentifier: string): Observable<{}> {
    return this.http.post(this.url + "/join", groupIdentifier);
  }
}
