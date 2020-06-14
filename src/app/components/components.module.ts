import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../shared/material/material.module'

import { HeaderComponent } from './header/header.component'
import { LeftMenuComponent } from './left-menu/left-menu.component'

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class ComponentsModule {
}
