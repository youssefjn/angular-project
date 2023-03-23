import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrlcurrent = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  apiUrlfuture = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";
  apiKey = "beb34f247bea6bbb83cf83f1acf6cd3d";
  constructor(private http: HttpClient) {}

  currentWeather(ville: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrlcurrent + ville + '&appid=' + this.apiKey
    );
  }
  fiveDaysWeather(ville: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrlfuture + ville + '&appid=' + this.apiKey
    );
  }
}