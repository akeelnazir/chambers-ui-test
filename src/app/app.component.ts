import { Component } from '@angular/core'
import { SidenavService } from './services/sidenav.service'
import { onMainContentChange } from './animations/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange]
})
export class AppComponent {
  public onSideNavChange: boolean

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res
    })
  }
}
