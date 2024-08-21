import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  constructor(
    public stateService: StateService,
    public searchService: SearchService
  ) {}

  toggleNavbar() {
    this.stateService.toggleNavbar();
  }

  getBurgerIconClass() {
    const isScreenSmall = window.innerWidth < 1300;

    if (isScreenSmall) {
      return 'fa-bars';
    } else {
      return this.stateService.isNavbarCollapsedSubject.getValue() ? 'fa-chevron-right' : 'fa-chevron-left';
    }
  }

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchService.searchTerm.next(value);
  }
}
