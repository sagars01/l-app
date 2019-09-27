import { Component, OnInit } from '@angular/core';
import { UserLocationService } from '../../services/user-location.service';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.css']
})
export class MapMainComponent implements OnInit {
  constructor(private userLocation: UserLocationService) { }
  userLocationData;
  latitude;
  longitude;
  zoom = 16;

  // tslint:disable-next-line:max-line-length
  placeSearchAPI = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B61293744000&inputtype=phonenumber&fields=place_id&key=AIzaSyAYgEPaCX_KfngPWsnwXfIjOrgbh4Smvf8';

  ngOnInit() {
    this.userLocation.getCurrentPosition().subscribe(
      userLocationData => {
        console.log(userLocationData);
        this.latitude = userLocationData.coords.latitude;
        this.longitude = userLocationData.coords.longitude;
        this.userLocationData = userLocationData;

        // Once the location is received now call the backend API

      },
      err => {
        console.error(err);
      }
    );
  }


}


interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
