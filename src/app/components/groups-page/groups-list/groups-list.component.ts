import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../../services/groups.service";
import {GroupModel} from "../../../models/special/groupModel";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groups: GroupModel[] = [
    {
      name: "Test group",
      description: "Group description",
      subjects: []
    },
    {
      name: "Test group",
      description: "Group description",
      subjects: []
    },
    {
      name: "Test group",
      description: "Group description",
      subjects: []
    }
  ];

  constructor(private readonly groupsService: GroupsService) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups() {
    this.groupsService.getGroups()
      .subscribe(res => {
        this.groups = res;
      });
  }

}
