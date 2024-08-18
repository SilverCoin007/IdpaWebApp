import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Podcast } from '../../models/podcast.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  podcasts: Podcast[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPodcasts().subscribe({
      next: (podcasts: Podcast[]) => {
        this.podcasts = podcasts;
      },
      error: (error: any) => {
        console.error('Error fetching podcasts:', error);
      },
      complete: () => {
        console.log('Podcast fetching completed');
      }
    });
  }
}
