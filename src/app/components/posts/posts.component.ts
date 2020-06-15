import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Post } from '../../models/post'

import { PostsService } from '../../services/posts/posts.service'
import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-posts',
  template: `
    <div *ngIf="(posts$ | async) as posts; else elseBlock">
      <app-posts-list [posts]="posts"></app-posts-list>
    </div>
    <ng-template #elseBlock>
      <mat-spinner></mat-spinner>
    </ng-template>
  `,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>
  constructor(
    private postsService: PostsService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.posts
    this.postsService.loadAll()
    this.userService.loadAll()
  }

}
