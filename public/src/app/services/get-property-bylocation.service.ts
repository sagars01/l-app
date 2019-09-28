import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { DataSourceService } from './datasource/datasource.service';
import { userServices } from '../../endpoints/dev/userdata';
@Injectable()
export class GetPropertyByLocationService {
    constructor(private dataSource: DataSourceService) { }
    private lat;
    private lng;
    private propertyData$: Observable<any>;
    getPropertyBasedOnUserLocation(latitude, longitude) {
        const mockData = {
            user_lat: '52.11',
            user_long: '13.23232332'
        };
        return this.dataSource.post(userServices.GetPropertiesByUserLocation, mockData);
    }

}
