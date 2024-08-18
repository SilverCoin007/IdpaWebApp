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
  
  onSeek(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.audioPlayerService.seekTo(Number(newValue));
  }
}
