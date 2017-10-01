import { Component } from '@angular/core';
import { Server } from './server';
import { ServerDataService } from './server-data.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
      <nav>
      <button class="btn btn-primary" routerLink="/dashboard">Dashboard</button>
      <button class="btn btn-primary" routerLink="/servers">Servers</button>
    </nav>
    <router-outlet></router-outlet>
 `,
  styleUrls: ['./app.component.css'],
  providers: [ServerDataService]
})
export class AppComponent {
  title = 'SSH manager';
}
