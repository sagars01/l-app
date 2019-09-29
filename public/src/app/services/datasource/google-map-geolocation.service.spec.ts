import { TestBed } from '@angular/core/testing';

import { GoogleMapGeolocationService } from './google-map-geolocation.service';

describe('GoogleMapGeolocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleMapGeolocationService = TestBed.get(GoogleMapGeolocationService);
    expect(service).toBeTruthy();
  });
});
