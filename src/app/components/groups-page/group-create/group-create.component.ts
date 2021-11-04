import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GroupModel} from "../../../models/special/groupModel";
import {GroupsService} from "../../../services/groups.service";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  //@ts-ignore
  group: GroupModel = {};

  isLoading = false;

  constructor(private readonly groupsService: GroupsService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;
    this.groupsService.createGroup(this.group)
      .subscribe(() => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      }).add(() => {
        this.router.navigateByUrl("/groups");
      });
  }
}
