import { Component, OnInit } from '@angular/core'
import { onSideNavChange, animateText } from '../../animations/animations'
import { SidenavService } from '../../services/sidenav.service'


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false
  public linkText: boolean = false

  public pages: Page[] = [
    { name: 'Posts', link: '/posts', icon: 'forum' },
    { name: 'Users', link: '/users', icon: 'people' }
  ]

  constructor(private _sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
