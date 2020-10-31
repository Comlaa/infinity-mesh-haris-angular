import { Injectable } from '@angular/core';
import {User} from './home/user/UserModel';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  private GetUsersUrl = 'https://localhost:44329/api/generic/GetUsers';
  private GetUserUrl = 'https://localhost:44329/api/generic/getUserById';

  getUsers() : Observable<User[]>
  {
    return this.http.get<User[]>(this.GetUsersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.GetUserUrl}?Id=${id}`;
    return this.http.get<User>(url);
}
}