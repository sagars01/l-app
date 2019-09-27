import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapMainComponent } from './map/map-main/map-main.component';
import { PropertyListComponent } from './app-main/property-list/property-list.component';
import { UserLocationService } from './services/user-location.service';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    PropertyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYgEPaCX_KfngPWsnwXfIjOrgbh4Smvf8'
    }),
    BrowserAnimationsModule,
  ],
  providers: [UserLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
