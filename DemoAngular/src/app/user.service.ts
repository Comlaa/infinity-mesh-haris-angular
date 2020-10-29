import { Injectable } from '@angular/core';
import {User} from './home/user/UserModel';
import {users} from './home/user/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() : User[]
  {
    return users;
  }
}
