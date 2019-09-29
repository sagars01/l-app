import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { maps } from '../../../endpoints/dev/maps';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GoogleMapGeocodingService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: IGeocoding) {
    const requestURL = `${maps.GoogleGeoCoding}/${params.responseFormat}?address=${params.address}&key=${environment.GoogleMAPAPIKey}`;
    return this.http.get(requestURL);
  }
}

interface IGeocoding {
  address: string;
  responseFormat: string;
}
