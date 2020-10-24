import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  public getUser(): User {
    let user: User = JSON.parse(localStorage.getItem('user')) as User;
    if(!user) user = new User();
    return user;
  }

  private setUser(user: User): void {
    let jsoned = JSON.stringify(user);
    localStorage.setItem('user', jsoned);
  }

  public setUserParameter(key: string, value: any): void {
    let user: User = this.getUser();
    user[key] = value;

    this.setUser(user);
  }

  public getUserParameter(key: string): any {
    let user: User = this.getUser();
    return user[key];
  }
}
