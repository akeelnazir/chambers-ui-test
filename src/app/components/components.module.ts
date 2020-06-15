import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MaterialModule } from '../shared/material/material.module'

import { UsernamePipe } from '../pipes/username/username.pipe'
import { TruncatePipe } from '../pipes/truncate/truncate.pipe'

import { HeaderComponent } from './header/header.component'
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PostsListComponent } from './posts-list/posts-list.component'

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    PostsListComponent,
    UsernamePipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
    UsernamePipe,
    TruncatePipe
  ]
})
export class ComponentsModule {
}
