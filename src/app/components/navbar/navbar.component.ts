import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed: boolean = false;

  constructor(public stateService: StateService, private router: Router) {}

  closeNavbar() {
    this.stateService.isNavbarCollapsedSubject.next(true);
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
