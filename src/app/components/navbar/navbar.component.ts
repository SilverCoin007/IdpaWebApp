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
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit(): void {
    this.stateService.isNavbarCollapsed$.subscribe(collapsed => {
      this.isCollapsed = collapsed;
    });
  }

  closeNavbar() {
    this.stateService.setNavbarCollapsed(true);
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
