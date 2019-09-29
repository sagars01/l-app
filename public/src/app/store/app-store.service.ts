import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService extends ObservableStore<IStore> {

  constructor() {
    super({ trackStateHistory: true });
    const initialState = {
      geoCodingData: null,
    };

    this.setState(initialState, 'init_state');
  }

  get() {
    const geoCodingData = this.getState().geoCodingData;
    return of(geoCodingData);
  }

  add(data) {
    const state = this.getState();
    state.geoCodingData = data;
    this.setState({ geoCodingData: state.geoCodingData }, 'add_geoCodingData');
  }
}

interface IStore {
  geoCodingData: any;
  // lat, lng
}
