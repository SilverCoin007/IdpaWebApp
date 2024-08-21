import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public isNavbarCollapsedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isAudioPlayerVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isSearchbarVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleNavbar() {
    const currentCollapsedState = this.isNavbarCollapsedSubject.getValue();
    this.isNavbarCollapsedSubject.next(!currentCollapsedState);
  }
}

