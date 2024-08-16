import { Injectable } from '@angular/core';
import { Podcast } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  private audio!: HTMLAudioElement;
  private currentPodcast: Podcast | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();
    }
  }

  play(podcast: Podcast) {
    if (!this.audio) {
      return;
    }

    if (this.currentPodcast !== podcast) {
      this.audio.src = podcast.audio_url;
      this.currentPodcast = podcast;
    }
    this.audio.play();
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  seek(seconds: number) {
    if (this.audio) {
      this.audio.currentTime += seconds;
    }
  }

  getCurrentTime(): number {
    return this.audio ? this.audio.currentTime : 0;
  }

  getDuration(): number {
    return this.audio ? this.audio.duration : 0;
  }

  getCurrentPodcast(): Podcast | null {
    return this.currentPodcast;
  }
}
