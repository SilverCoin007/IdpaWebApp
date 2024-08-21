import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { AudioPlayerService } from '../../services/audio-player.service';
import { Observable } from 'rxjs';
import { Podcast } from '../../models/podcast.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  podcasts$: Observable<Podcast[]>;

  constructor(public audioPlayerService: AudioPlayerService) {
    this.podcasts$ = this.audioPlayerService.displayedPlaylist.asObservable();
  }
}
