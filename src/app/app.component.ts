import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { StateService } from './services/state.service';
import { DataService } from './services/data.service';
import { Podcast } from './models/podcast.model';

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
  podcasts: Podcast[] = [];

  constructor(private stateService: StateService, private dataService: DataService) {}

  ngOnInit(): void {
    this.stateService.isNavbarCollapsed$.subscribe(
      collapsed => this.isNavbarCollapsed = collapsed
    );

    this.dataService.getPodcasts().subscribe({
      next: (podcasts: Podcast[]) => {
        this.podcasts = podcasts;
      },
      error: (error: any) => {
        console.error('Error fetching podcasts:', error);
      },
      complete: () => {
        console.log('Podcast fetching completed');
      }
    });
  }

  closeNavbar(): void {
    this.stateService.setNavbarCollapsed(true);
  }
}
