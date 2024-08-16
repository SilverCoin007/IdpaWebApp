import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Podcast } from '../../services/data.service';
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
    this.dataService.getPodcasts().subscribe(podcasts => {
      this.podcasts = podcasts;
    }, error => {
      console.error('Error fetching podcasts:', error);
    });
  }
}
