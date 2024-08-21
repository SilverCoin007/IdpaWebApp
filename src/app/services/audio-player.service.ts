import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Podcast } from '../models/podcast.model';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  public audio!: HTMLAudioElement;
  public originalPlaylist: Podcast[] = [];
  public displayedPlaylist: BehaviorSubject<Podcast[]> = new BehaviorSubject<Podcast[]>([]);
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
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying.next(false);
      });

      this.audio.addEventListener('timeupdate', () => {
        this.currentTime.next(this.audio.currentTime);
      });

      this.audio.addEventListener('loadedmetadata', () => {
        this.duration.next(this.audio.duration);
      });
    }
  }

  setOriginalPlaylist(podcasts: Podcast[]) {
    this.originalPlaylist = podcasts;
    this.displayedPlaylist.next(podcasts);

    if (!this.currentPodcast.getValue() && this.originalPlaylist.length > 0) {
      this.play(this.originalPlaylist[0]);
      this.audio.pause();
    }
  }

  setDisplayedPlaylist(podcasts: Podcast[]) {
    this.displayedPlaylist.next(podcasts);
  }

  play(podcast?: Podcast) {
    if (!this.audio) {
      return;
    }

    if (podcast && this.currentPodcast.getValue() !== podcast) {
      const index = this.originalPlaylist.findIndex(p => p.index === podcast.index);
      this.currentIndex.next(index);
      this.audio.src = podcast.audio_url;
      this.audio.currentTime = 0;
      this.currentPodcast.next(podcast);
    }

    this.audio.play();
  }

  togglePlayPause() {
    if (this.isPlaying.getValue()) {
      this.pause();
    } else {
      this.play();
    }
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

    currentIndex++;
    if (currentIndex < this.originalPlaylist.length) {
      this.play(this.originalPlaylist[currentIndex]);
      this.currentIndex.next(currentIndex);
    } else {
      this.play(this.originalPlaylist[0]);
      this.currentIndex.next(0);
    }
  }

  playPrevious() {
    let currentIndex = this.currentIndex.getValue();

    if (currentIndex > 0) {
      currentIndex--;
      this.play(this.originalPlaylist[currentIndex]);
    } else {
      currentIndex = this.originalPlaylist.length - 1;
      this.play(this.originalPlaylist[currentIndex]);
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
