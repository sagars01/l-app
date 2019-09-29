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
        const locationParams: ILocationParams = {
            user_lat: latitude,
            user_long: longitude
        };
        return this.dataSource.post(userServices.GetPropertiesByUserLocation, locationParams);
    }

}

interface ILocationParams {
    user_lat: string | number;
    user_long: string | number;
}
