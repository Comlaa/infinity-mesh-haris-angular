import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqLeaveService } from '../req-leave.service';
import { UserComponent } from './user/user.component';
import { User } from './user/UserModel';
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private UserService : UserService) { }
  users : User[];
  user : User ={
    id:10000,
    name: 'name',
    email: 'email',
    jobTitle: 'jobTitle',
    department: 'department',
    password: 'password',
  }
   
  ngOnInit(): void {
    this.UserService.getUser(1).subscribe(user => this.user = user);
    this.getUsers();
  } 

  getUsers()
  {
    this.UserService.getUsers().subscribe(users => this.users = users);  
  } 
}