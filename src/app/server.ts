export class Server {
  Id: number;
  Hostname: string = '';
  Ip: string = '';
  ServerUsers: string = '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
