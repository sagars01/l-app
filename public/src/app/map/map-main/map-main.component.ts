import { Component, OnInit } from '@angular/core';
import { UserLocationService } from '../../services/user-location.service';
import { environment } from 'src/environments/environment';
import { GetPropertyByLocationService } from 'src/app/services/get-property-bylocation.service';
import { SearchQueryDetailsService } from 'src/app/services/search-query-details.service';
import { AppStoreService } from 'src/app/store/app-store.service';
import { Subscription } from 'rxjs';

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
  searchInput = 'Munich';
  storeSubscription$: Subscription;

  ngOnInit() {
    this.userLocation.getCurrentPosition().subscribe(
      userLocationData => {
        console.log(userLocationData);
        // This is hard coded because the database consists only these data.
        const mockData = {
          user_lat: 52.509677,
          user_long: 13.370559
        };
        this.latitude = mockData.user_lat;
        this.longitude = mockData.user_long;
        this.userLocationData = userLocationData;
        this.propertiesNearUserService.getPropertyBasedOnUserLocation('', '').subscribe(
          (data) => {
            this.properties = this.convertToNumber(data);
            console.log(this.convertToNumber(data));
          }
        );
        // Once the location is received now call the backend API

      },
      err => {
        console.error(err);
      }
    );
    // Store subscription
    this.store.stateChanged.subscribe(
      (state) => {
        if (state) {
          console.log(state.geoCodingData);
        }

      }
    );
    this.getLocationDetailsFromUserInput();
  }

  onSearch(searchQuery) {
    console.log(searchQuery);
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

  private getLocationDetailsFromUserInput(searchQuery?: IGeocoding) {
    const query: IGeocoding = {
      address: 'Berlin',
      responseFormat: 'json'
    };
    this.userQueryGeocodingService.getSearchQueryLocationDetails(query);
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