import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { DataSourceService } from './datasource/datasource.service';
import { GoogleMapGeocodingService } from './datasource/google-map-geocoding.service';
import { AppStoreService } from '../store/app-store.service';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryDetailsService {

  constructor(
    private dataSource: DataSourceService,
    private geoCodingService: GoogleMapGeocodingService,
    private store: AppStoreService
  ) { }

  /**
   *
   * @param queryParams send the address and response format
   * @description subscribe to state for update search query information
   */
  getSearchQueryLocationDetails(queryParams?) {
    return this.geoCodingService.get(queryParams).subscribe(
      (geoCodingInformation: any) => {
        const locationCoords = geoCodingInformation.results[geoCodingInformation.results.length - 1].geometry.location;
        this.store.add(locationCoords);
      }
    );
  }
}
