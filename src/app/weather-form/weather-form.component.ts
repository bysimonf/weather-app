import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  enteredSeason: string = ''
  // isSeasonEntered: boolean = false <- not neccessary
  // isSeasonUnknown: boolean = false <- not neccessary

  msg = ''

  seasonImg = ''


  updateSeason = () => {
    console.log(this.enteredSeason)
    this.validateSeason()
  }

  validateSeason = () => { // <- @Alex: can we use a callback here?
    if(this.enteredSeason === 'spring' || this.enteredSeason === 'summer' || this.enteredSeason === 'fall' || this.enteredSeason === 'winter'){
      console.log('real season entered')
      // this.isSeasonEntered = !this.isSeasonEntered
      this.msg = `Cool! It's finally ${this.enteredSeason}.`
      this.seasonImg = `/assets/${this.enteredSeason}.jpg`
    }
    else {
      // this.isSeasonUnknown = !this.isSeasonUnknown
      this.msg = "Sorry, we don't know the season."
      this.seasonImg = ''
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
