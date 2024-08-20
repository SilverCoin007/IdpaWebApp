import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(private stateService: StateService) {}

  toggleNavbar() {
    const currentCollapsedState = this.stateService.isNavbarCollapsedSubject.getValue();
    this.stateService.isNavbarCollapsedSubject.next(!currentCollapsedState);
  }
}
