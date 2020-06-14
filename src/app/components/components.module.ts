import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MaterialModule } from '../shared/material/material.module'

import { HeaderComponent } from './header/header.component'
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class ComponentsModule {
}
