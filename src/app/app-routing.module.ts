import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { PostsComponent } from './components/posts/posts.component'
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
