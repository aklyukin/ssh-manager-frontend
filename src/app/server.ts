export class Server {
  Id: number;
  Hostname: '';
  Port: '';
  Ip: 22;
  ServerUsers: '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

