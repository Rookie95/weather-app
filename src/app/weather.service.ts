import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '53c3653740ed2e97eb4cf2685dbd095b';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }
  getWeatherData(city: string) {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }
}
