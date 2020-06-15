import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { BehaviorSubject, noop } from 'rxjs'
import { Mock, Times } from 'typemoq'

import { Post } from '../../models/post'
import { User } from '../../models/user'

import { PostsService } from '../../services/posts/posts.service'
import { UsersService } from '../../services/users/users.service'

import { PostsComponent } from './posts.component'

describe('PostsComponent', () => {
  let component: PostsComponent
  let fixture: ComponentFixture<PostsComponent>
  let usersSubject: BehaviorSubject<User[]>
  const mockUserService = Mock.ofType<UsersService>()
  let postsSubject: BehaviorSubject<Post[]>
  const mockPostsService = Mock.ofType<PostsService>()

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
  let posts: Post[] = [] as Post[]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PostsComponent],
      providers: [
        { provide: PostsService, useFactory: () => mockPostsService.object },
        { provide: UsersService, useFactory: () => mockUserService.object }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    mockPostsService.reset()
    mockPostsService.setup(s => s.posts).returns(() => postsSubject.asObservable())
    mockPostsService.setup(s => s.loadAll).returns(() => noop)

    mockUserService.reset()
    mockUserService.setup(s => s.users).returns(() => usersSubject.asObservable())
    mockUserService.setup(s => s.loadAll).returns(() => noop)

    usersSubject = new BehaviorSubject<User[]>(users)
    postsSubject = new BehaviorSubject<Post[]>(posts)

    fixture = TestBed.createComponent(PostsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create and call UserService.loadAll() and PostService.loadAll()', () => {
    expect(component).toBeTruthy()
    mockUserService.verify(service => service.loadAll(), Times.once())
    mockPostsService.verify(service => service.loadAll(), Times.once())
  })
})
