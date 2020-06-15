import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { User } from '../../models/user'

import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.service.users
    this.service.loadAll()
  }

}
