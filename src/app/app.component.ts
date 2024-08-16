import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, AudioPlayerComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IdpaWebApp';
  isNavbarCollapsed: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.isNavbarCollapsed$.subscribe(
      collapsed => this.isNavbarCollapsed = collapsed
    );
  }

  closeNavbar(): void {
    this.stateService.setNavbarCollapsed(true);
  }
}
