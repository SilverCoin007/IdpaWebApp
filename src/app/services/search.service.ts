import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AudioPlayerService } from './audio-player.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private audioPlayerService: AudioPlayerService,
    private router: Router  // Injektion des Routers
  ) {
    this.searchTerm.pipe(
      debounceTime(0)
    ).subscribe(term => {
      this.navigateToHomeIfNotThere();  // Navigation zur Home-Seite, falls notwendig
      this.search(term);
    });
  }

  private search(term: string) {
    const lowerCaseTerm = term.toLowerCase();

    if (lowerCaseTerm === '') {
      this.audioPlayerService.setDisplayedPlaylist(this.audioPlayerService.originalPlaylist);
    } else {
      const filteredPodcasts = this.audioPlayerService.originalPlaylist.filter(podcast =>
        podcast.name.toLowerCase().includes(lowerCaseTerm) ||
        podcast.author.toLowerCase().includes(lowerCaseTerm)
      );

      this.audioPlayerService.setDisplayedPlaylist(filteredPodcasts);
    }
  }

  private navigateToHomeIfNotThere() {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
  }
}
