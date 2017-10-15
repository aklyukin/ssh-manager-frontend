import { Component } from '@angular/core';
import { Server } from './server';
import { ServerDataService } from './server-data.service';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
        <button class="btn btn-primary navbar-btn" routerLink="/dashboard">Dashboard</button>
        <button class="btn btn-primary navbar-btn" routerLink="/servers">Servers</button>
        <button class="btn btn-primary navbar-btn" routerLink="/users">Users</button>
        </div>
      </nav>
    <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css'],
  providers: [ServerDataService, UserDataService]
})
export class AppComponent {
  title = 'SSH manager';
}
