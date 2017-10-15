import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ServersComponent } from './servers.component';

import { ServerDataService } from './server-data.service';
import { UserDataService } from './user-data.service';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'servers',
        component: ServersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ServersComponent,
    UsersComponent
  ],
  providers: [
    ServerDataService,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
