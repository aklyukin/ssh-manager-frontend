import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Server } from './server';

@Injectable()
export class ServerDataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serversUrl = 'api/servers';

  constructor(private http: Http) { }

  getServers(): Promise<Server[]>{
    return this.http.get(this.serversUrl)
               .toPromise()
               .then(response => response.json() as Server[])
               .catch(this.handleError);
  }

  createServer(hostname: string, port: number): Promise<Server> {
    return this.http
      .post(this.serversUrl, JSON.stringify({hostname: hostname, port: port}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Server)
      .catch(this.handleError);
  }

  deleteServer(id: number): Promise<void> {
    return this.http
      .delete(this.serversUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
