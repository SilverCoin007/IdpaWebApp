import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state.service';
import { AudioPlayerService } from '../../services/audio-player.service';

@Component({
  selector: 'app-mini-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-player.component.html',
  styleUrl: './mini-player.component.scss'
})
export class MiniPlayerComponent {
  constructor(private stateService: StateService, public audioPlayerService: AudioPlayerService) {}

  openAudioPlayer() {
    this.stateService.isAudioPlayerVisibleSubject.next(true);
  }
}
