import { Injectable } from '@angular/core';
import { DataSourceService } from './datasource/datasource.service';
import { bookings } from '../../endpoints/dev/bookings';
@Injectable({
  providedIn: 'root'
})
export class UserBookingService {

  constructor(
    private dataSource: DataSourceService
  ) { }

  bookNewProperty(propertyId) {
    const bookingReqBody = {
      user_id: 8,
      property_id: propertyId,
    };
    return this.dataSource.post(bookings.BookNew, bookingReqBody);
  }
}
