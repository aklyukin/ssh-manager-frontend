import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Server } from './server';
import { ServerDataService } from './server-data.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit{

  servers: Server[];

  constructor(private _serverDataService: ServerDataService) {
  }

  ngOnInit(){
    this.getServers();
  }

  getServers() {
    this._serverDataService.getServers().then(servers => this.servers = servers );
  }

  addServer(hostname: string): void {
    console.log(JSON.stringify(this.servers))
    hostname = hostname.trim();
    if (!hostname) { return; }
    this._serverDataService.createServer(hostname)
      .then(server => {
        this.servers.push(server);
      });
  }
}
