import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(public stateService: StateService) {}

  toggleNavbar() {
    const currentCollapsedState = this.stateService.isNavbarCollapsedSubject.getValue();
    this.stateService.isNavbarCollapsedSubject.next(!currentCollapsedState);
  }
  getBurgerIconClass() {
    const isScreenSmall = window.innerWidth < 1300;

    if (isScreenSmall) {
      return 'fa-bars';
    } else {
      return this.stateService.isNavbarCollapsedSubject.getValue() ? 'fa-chevron-right' : 'fa-chevron-left';
    }
  }
}
