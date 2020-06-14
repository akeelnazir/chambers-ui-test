import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './shared/material/material.module'
import { ComponentsModule } from './components/components.module'
import { AppRoutingModule } from './app-routing.module'

import { SidenavService } from './services/sidenav.service'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
