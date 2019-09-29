import { TestBed } from '@angular/core/testing';

import { GoogleMapGeocodingService } from './google-map-geocoding.service';

describe('GoogleMapGeocodingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleMapGeocodingService = TestBed.get(GoogleMapGeocodingService);
    expect(service).toBeTruthy();
  });
});
