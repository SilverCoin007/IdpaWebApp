import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Podcast } from '../models/podcast.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // Initial state
  private isNavbarCollapsedSubject = new BehaviorSubject<boolean>(true);

  // Observable streams
  isNavbarCollapsed$ = this.isNavbarCollapsedSubject.asObservable();

  // State change methods
  setNavbarCollapsed(collapsed: boolean) {
    this.isNavbarCollapsedSubject.next(collapsed);
  }

  getNavbarCollapsed(): boolean {
    return this.isNavbarCollapsedSubject.value;
  }
}
