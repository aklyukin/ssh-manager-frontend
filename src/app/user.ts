export class User {
  Id: number;
  UserName: '';
  Sshkey: '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

