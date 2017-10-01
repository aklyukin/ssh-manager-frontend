import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ServersComponent } from './servers.component';

import { ServerDataService } from './server-data.service';

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
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ServersComponent
  ],
  providers: [
    ServerDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
