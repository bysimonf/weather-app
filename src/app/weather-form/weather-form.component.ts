import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  enteredSeason: string = ''
  // isSeasonEntered: boolean = false <- not neccessary
  // isSeasonUnknown: boolean = false <- not neccessary

  updateSeason = () => {
    console.log(this.enteredSeason)
    this.enteredSeason = this.enteredSeason
  }

  constructor() {}

  ngOnInit(): void {
  }

}
