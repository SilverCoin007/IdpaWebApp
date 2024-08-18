import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Podcast } from '../../models/podcast.model';
import { AudioPlayerService } from '../../services/audio-player.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() podcast!: Podcast;

  constructor(private audioPlayerService: AudioPlayerService) {}

  formatIndex(index: number): string {
    return index < 10 ? `0${index}` : `${index}`;
  }

  playPodcast() {
    this.audioPlayerService.play(this.podcast);
  }
}
