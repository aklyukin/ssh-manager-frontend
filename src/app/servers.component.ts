import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this._serverDataService.getServers().then(servers => this.servers = servers );
  }

  addServer(hostname: string, port: number): void {
    hostname = hostname.trim();
    if (!hostname) { return; }
    this._serverDataService.createServer(hostname, port)
      .then(server => {
        this.servers.push(server);
      });
  }

  deleteServer(server: Server): void {
    this._serverDataService.deleteServer(server.Id)
      .then(() => {
        this.servers = this.servers.filter(s => s !== server);
      });
  }

}
