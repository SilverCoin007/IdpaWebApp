import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerService } from '../../services/audio-player.service';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  constructor(public audioPlayerService: AudioPlayerService) {}

  seekForward() {
    this.audioPlayerService.seek(10);
  }

  seekBackward() {
    this.audioPlayerService.seek(-10);
  }

  playCurrentPodcast() {
    const currentPodcast = this.audioPlayerService.getCurrentPodcast();
    if (currentPodcast) {
      this.audioPlayerService.play(currentPodcast);
    }
  }
}
