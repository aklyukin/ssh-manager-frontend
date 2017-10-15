import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserDataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  getUsers(): Promise<User[]>{
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }

  createUser(username: string, sshkey: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({username: username, sshkey: sshkey}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  deleteUser(id: number): Promise<void> {
    return this.http
      .delete(this.usersUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
