import { Injectable } from '@angular/core';
import { Podcast } from '../models/podcast.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  public audio!: HTMLAudioElement;
  public playlist: BehaviorSubject<Podcast[]> = new BehaviorSubject<Podcast[]>([]);
  public currentIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentPodcast: BehaviorSubject<Podcast | null> = new BehaviorSubject<Podcast | null>(null);
  public isPlaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentTime: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public duration: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();
      this.audio.volume = 0.1;

      this.audio.addEventListener('ended', () => this.playNext());

      this.audio.addEventListener('play', () => {
        this.isPlaying.next(true);
        console.log(this.isPlaying.getValue());
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying.next(false);
        console.log(this.isPlaying.getValue());
      });

      this.audio.addEventListener('timeupdate', () => {
        this.currentTime.next(this.audio.currentTime);
      });

      this.audio.addEventListener('loadedmetadata', () => {
        this.duration.next(this.audio.duration);
      });
    }
  }

  setPlaylist(podcasts: Podcast[]) {
    this.playlist.next(podcasts);

    if (podcasts.length > 0) {
      this.currentIndex.next(0);
      this.currentPodcast.next(podcasts[0]);
      this.audio.src = podcasts[0].audio_url;
      this.audio.currentTime = 0;
      this.audio.pause();
      this.isPlaying.next(false);
    }
  }

  togglePlayPause() {
    if (this.isPlaying.getValue()) {
      this.pause();
    } else {
      this.play();
    }
  }

  play(podcast?: Podcast) {
    if (!this.audio) {
      return;
    }

    if (podcast && this.currentPodcast.getValue() !== podcast) {
      const index = this.playlist.getValue().findIndex(p => p.index === podcast.index);
      this.currentIndex.next(index);
      this.audio.src = podcast.audio_url;
      this.audio.currentTime = 0;
      this.currentPodcast.next(podcast);
    }

    this.audio.play();
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  seekTo(seconds: number) {
    if (this.audio) {
      this.audio.currentTime = seconds;
    }
  }

  playNext() {
    let currentIndex = this.currentIndex.getValue();
    const playlist = this.playlist.getValue();

    currentIndex++;
    if (currentIndex < playlist.length) {
      this.play(playlist[currentIndex]);
      this.currentIndex.next(currentIndex);
    } else {
      this.play(playlist[0]);
      this.currentIndex.next(0);
    }
  }

  playPrevious() {
    let currentIndex = this.currentIndex.getValue();
    const playlist = this.playlist.getValue();

    if (currentIndex > 0) {
      currentIndex--;
      this.play(playlist[currentIndex]);
    } else {
      currentIndex = playlist.length - 1;
      this.play(playlist[currentIndex]);
    }

    this.currentIndex.next(currentIndex);
  }

  getFormattedCurrentTime(): string {
    return this.formatTime(this.currentTime.getValue());
  }
  
  getFormattedDuration(): string {
    return this.formatTime(this.duration.getValue());
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const secs: number = Math.floor(seconds % 60);
    return minutes.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
  }
  
}
