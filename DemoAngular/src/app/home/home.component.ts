import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User } from './user/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  User : User = { Id:5,
  Name:"Haris Mlaco",
  Email:"haris.mlaco@infinity.com",
  Department: "Engineering",
  JobTitle: "Software developer"};
  ngOnInit(): void {
  }

}