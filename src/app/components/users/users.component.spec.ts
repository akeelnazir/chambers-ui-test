import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { Mock, Times } from 'typemoq'
import { BehaviorSubject, noop } from 'rxjs'

import { User } from '../../models/user'
import { UsersService } from '../../services/users/users.service'

import { UsersComponent } from './users.component'

describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>
  let usersSubject: BehaviorSubject<User[]>
  const mockUserService = Mock.ofType<UsersService>()

  let users: User[] = [
    {
      id: 1,
      username: 'username',
      name: 'name',
      email: 'email',
      company: {
        name: 'company'
      }
    }
  ] as User[]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [UsersComponent],
      providers: [
        { provide: UsersService, useFactory: () => mockUserService.object }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    mockUserService.reset()
    mockUserService.setup(s => s.users).returns(() => usersSubject.asObservable())
    mockUserService.setup(s => s.loadAll).returns(() => noop)

    usersSubject = new BehaviorSubject<User[]>(users)
    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create and call UserService.loadAll()', () => {
    expect(component).toBeTruthy()
    mockUserService.verify(service => service.loadAll(), Times.once())
  })
})
