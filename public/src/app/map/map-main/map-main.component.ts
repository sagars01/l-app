import { Component, OnInit } from '@angular/core';
import { UserLocationService } from '../../services/user-location.service';
import { environment } from 'src/environments/environment';
import { GetPropertyByLocationService } from 'src/app/services/get-property-bylocation.service';
import { SearchQueryDetailsService } from 'src/app/services/search-query-details.service';
import { AppStoreService } from 'src/app/store/app-store.service';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements OnInit {
  constructor(
    private userLocation: UserLocationService,
    private propertiesNearUserService: GetPropertyByLocationService,
    private userQueryGeocodingService: SearchQueryDetailsService,
    private store: AppStoreService,
  ) { }
  userLocationData;
  latitude;
  longitude;
  zoom = 14;
  properties;
  searchQuery: string;
  searchQueryChanged: Subject<string> = new Subject<string>();
  storeSubscription$: Subscription;

  ngOnInit() {
    this.getUserLocationFromDevice();
    this.searchOnUserInput();
    // Store subscription
    this.store.stateChanged.subscribe(
      (state) => {
        if (state.geoCodingData) {
          const geoCodingData = state.geoCodingData;
          this.latitude = geoCodingData.lat;
          this.longitude = geoCodingData.lng;
          this.getPropertyData(geoCodingData.lat, geoCodingData.lng);
        }

      }
    );
  }


  onSearch(searchQuery) {
    this.searchQueryChanged.next(searchQuery);
  }

  private getUserLocationFromDevice() {
    this.userLocation.getCurrentPosition().subscribe(
      userLocationData => {
        console.log(userLocationData);
        this.latitude = userLocationData.coords.latitude;
        this.longitude = userLocationData.coords.longitude;
        this.userLocationData = userLocationData;
        const storeGeoCodingData = {
          geoCodingData: {
            lat: userLocationData.coords.latitude,
            lng: userLocationData.coords.longitude
          }
        }
        // Once the location is received now call the backend API
        this.store.add(storeGeoCodingData.geoCodingData);
        this.getPropertyData(userLocationData.coords.latitude, userLocationData.coords.longitude);
      },
      err => {
        // This is hard coded because the database consists only these data.
        const defaultLocation = {
          user_lat: 52.509677,
          user_long: 13.370559
        };
        this.getPropertyData(defaultLocation.user_lat, defaultLocation.user_long);
        // console.error(err);
      }
    );
  }

  private convertToNumber(objects) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
          obj[prop] = +obj[prop];
        }
      }
    }
    return objects;
  }

  private getPropertyData(lat, long) {
    this.propertiesNearUserService.getPropertyBasedOnUserLocation(lat, long).subscribe(
      (data) => {
        this.properties = this.convertToNumber(data);
        this.latitude = lat;
        this.longitude = long;
      }
    );

  }

  private getLocationDetailsFromUserInput(searchQuery) {
    const query: IGeocoding = {
      address: searchQuery,
      responseFormat: 'json'
    };
    this.userQueryGeocodingService.getSearchQueryLocationDetails(query);
  }

  private searchOnUserInput() {
    this.searchQueryChanged.pipe(debounceTime(2000), distinctUntilChanged()).subscribe(
      (model) => {
        this.searchQuery = model;
        this.getLocationDetailsFromUserInput(model);
      }
    );
  }

}

// Can be moved to a new folder types
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface IGeocoding {
  address: string;
  responseFormat: string;
}
