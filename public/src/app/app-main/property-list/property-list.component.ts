import { Component, OnInit } from '@angular/core';
import { GetPropertyByLocationService } from 'src/app/services/get-property-bylocation.service';
import { AppStoreService } from 'src/app/store/app-store.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(
    private propertiesNearUserService: GetPropertyByLocationService,
    private store: AppStoreService,
  ) { }

  isLoading = true;
  properties;
  ngOnInit() {
    this.store.stateChanged.subscribe(
      (state) => {
        if (state.geoCodingData) {
          const geoCodingData = state.geoCodingData;
          this.getPropertiesOnLocation(geoCodingData.lat, geoCodingData.lng);
        }

      }
    )
  }

  getPropertiesOnLocation(lat, long) {
    this.propertiesNearUserService.getPropertyBasedOnUserLocation(lat, long).subscribe(
      (data) => {
        this.isLoading = false;
        this.properties = data;
      }
    );
  }

}
