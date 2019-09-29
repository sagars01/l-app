import { TestBed } from '@angular/core/testing';

import { UserBookingService } from './user-booking.service';

describe('UserBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBookingService = TestBed.get(UserBookingService);
    expect(service).toBeTruthy();
  });
});
