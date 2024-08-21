import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AudioPlayerService } from './audio-player.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private audioPlayerService: AudioPlayerService) {
    this.searchTerm.pipe(
      debounceTime(0)
    ).subscribe(term => {
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
}
