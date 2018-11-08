import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public cart = new BehaviorSubject({});
  public order = new BehaviorSubject({});

  constructor() { }
}
