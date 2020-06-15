import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './shared/material/material.module'
import { ComponentsModule } from './components/components.module'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { SidenavService } from './services/sidenav.service'
import { PostsService } from './services/posts/posts.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [SidenavService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
