import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { UserService } from 'src/app/user.service';
import {User} from './UserModel'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user : User ={
    id:10000,
    name: 'name',
    email: 'email',
    jobTitle: 'jobTitle',
    department: 'department',
    password: 'password',
  }
  users:Observable<User[]>;
  UserForm;
  constructor( private userService : UserService, private formBuilder : FormBuilder) 
  { 
    this.UserForm = formBuilder.group({
      name:'',
      password:'',
      department:'',
      jobTitle:'',
      email:'',
    });
  }
  ngOnInit(): void {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }
 
  AddNewUser(newUser)
  {
    this.userService.addUser(newUser).subscribe();
    this.UserForm.reset();
    console.log("Pozvan");
    alert("User Added!");
  }
  
}
