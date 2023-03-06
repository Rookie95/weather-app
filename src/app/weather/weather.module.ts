import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD-zbWh6skzfHZQzmFVcqqunPoI_YwbUU'
    })
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
