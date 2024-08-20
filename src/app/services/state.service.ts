import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public isNavbarCollapsedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAudioPlayerVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
