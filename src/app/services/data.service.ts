import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Podcast {
  index: number;
  name: string;
  author: string;
  length: string;
  image_url: string;
  audio_url: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'podcasts.json';

  constructor(private http: HttpClient) {}

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(this.jsonUrl);
  }
}
