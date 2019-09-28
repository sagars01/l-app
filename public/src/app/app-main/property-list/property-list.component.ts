import { Component, OnInit } from '@angular/core';
import { GetPropertyByLocationService } from 'src/app/services/get-property-bylocation.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(
    private propertiesNearUserService: GetPropertyByLocationService,
  ) { }

  properties;
  ngOnInit() {
    this.propertiesNearUserService.getPropertyBasedOnUserLocation('', '').subscribe(
      (data) => {
        this.properties = data;
      }
    );
  }

}
