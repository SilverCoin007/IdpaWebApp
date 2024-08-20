import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-mini-player',
  standalone: true,
  imports: [],
  templateUrl: './mini-player.component.html',
  styleUrl: './mini-player.component.scss'
})
export class MiniPlayerComponent {
  constructor(private stateService: StateService) {}

  openAudioPlayer() {
    this.stateService.isAudioPlayerVisibleSubject.next(true);
  }
}
