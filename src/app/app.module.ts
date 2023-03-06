import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD-zbWh6skzfHZQzmFVcqqunPoI_YwbUU'
    }),

  ]
})
export class AppModule { }
