import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private _userDataService: UserDataService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userDataService.getUsers().then(users => this.users = users );
  }
  addUser(username: string, sshkey: string): void {
    username = username.trim();
    if (!username) { return; }
    this._userDataService.createUser(username, sshkey)
      .then(user => {
        this.users.push(user);
      });
  }

  deleteUser(user: User): void {
    this._userDataService.deleteUser(user.Id)
      .then(() => {
        this.users = this.users.filter(s => s !== user);
      });
  }
}
