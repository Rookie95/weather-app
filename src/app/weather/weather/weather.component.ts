import { Component } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone, OnInit, ViewChild, Inject } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
// import { google } from '@agm/core/services/google-maps-types';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // city = 'London';
  city: string = '';
  weatherData: any;
  isLoading = true;
  history: any[] = [];
  tempInDegrees: string = '';

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, @Inject(NgZone)
  private ngZone: NgZone, private weatherService: WeatherService) {
  }
  ngOnInit() {
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: []
    //   });
    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       let place = google.maps.places.PlaceResult = autocomplete.getPlace();
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //     });
    //   });
    // });

    const history = localStorage.getItem('weatherHistory');
    if (history) {
      this.history = JSON.parse(history);
    }

    this.getWeatherData();
  }
  getWeatherData() {
    this.isLoading = true;
    this.weatherService.getWeatherData(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log("data", data);
        this.tempInDegrees = ((this.weatherData.main.temp - 273.15).toFixed(2));
        this.addToHistory();

        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }

    );
  }
  addToHistory() {
    // const historyItem = { city: this.city, temp: this.weatherData.main.temp };
    const historyItem = { city: this.city, temp: this.getTemperatureInDegrees() };
    this.history.push(historyItem);
    localStorage.setItem('weatherHistory', JSON.stringify(this.history));
  }
  getTemperatureInDegrees() {
    return (this.weatherData.main.temp - 273.15).toFixed(2);
  }
}
