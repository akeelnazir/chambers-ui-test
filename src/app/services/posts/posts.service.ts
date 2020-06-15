import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs'

import { Post } from '../../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _posts: BehaviorSubject<Post[]>
  private cache: {
    posts: Post[]
  }

  constructor(private http: HttpClient) {
    this.cache = { posts: [] }
    this._posts = new BehaviorSubject<Post[]>([])
  }

  get posts(): Observable<Post[]> {
    return this._posts.asObservable()
  }

  postById(id: number): Post {
    return this.cache.posts.find(post => post.id == id)
  }

  loadAll() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.cache.posts = posts
        this._posts.next(posts)
      }, error => {
        console.log('Failed to fetch posts')
      })
  }
}
