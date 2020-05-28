import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  validLogins: Auth[] = [{ username: 'user', password: 'pass' }];
  public loggedIn: boolean = false;

  constructor() { }

  login(user: Auth): boolean {
    if (this.validLogins.filter((u) => u.username === user.username && u.password.toLowerCase() === user.password.toLowerCase()).length > 0) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
