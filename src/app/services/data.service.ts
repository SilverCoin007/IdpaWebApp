import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Podcast } from '../models/podcast.model';
import { AudioPlayerService } from './audio-player.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'podcasts.json';
  private podcasts: Observable<Podcast[]> | undefined;

  constructor(private http: HttpClient, private audioPlayerService: AudioPlayerService) {}

  getPodcasts(): Observable<Podcast[]> {
    this.podcasts = this.http.get<Podcast[]>(this.jsonUrl);
    this.podcasts.subscribe(podcasts => {
      this.audioPlayerService.setOriginalPlaylist(podcasts);
    });
    return this.podcasts;
  }
}
