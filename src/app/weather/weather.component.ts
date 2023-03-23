import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  data$: Observable<any> | undefined;
  city!: string;
  weather: any = [];



  forecast: boolean = false;
  current: any = true;
  meteoCurrentDate!: any;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  getCurrentWeather() {
    this.forecast = false;
    this.current = true;
    this.weatherService.currentWeather(this.city).subscribe((data) => {
      (this.current = data), (this.meteoCurrentDate = new Date(this.current.dt * 1000)
        .toISOString()
        .slice(0, 10));;
    });
  }

  getFiveDaysWearther() {
    this.forecast = true;
    this.current = false;
    this.weatherService
      .fiveDaysWeather(this.city)
      .subscribe((data) => this.rendering(data));
  }

  rendering(data: any) {
    data.list.forEach((element: any) => {
      this.weather.push(element);
    });
  }
}