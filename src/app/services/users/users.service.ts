import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'

import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: BehaviorSubject<User[]>
  private cache: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    this.cache = { users: [] }
    this._users = new BehaviorSubject<User[]>([])
  }

  get users(): Observable<User[]> {
    return this._users.asObservable()
  }

  userById(id: number): User {
    return this.cache.users.find(user => user.id == id)
  }

  loadAll() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.cache.users = users
        this._users.next(users)
      }, error => {
        console.log('Failed to fetch users')
      })
  }

}
