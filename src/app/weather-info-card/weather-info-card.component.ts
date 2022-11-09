import { Component, Input, OnInit, Output } from '@angular/core';
import { WeatherFormComponent } from '../weather-form/weather-form.component';


@Component({
  selector: 'weather-info-card',
  templateUrl: './weather-info-card.component.html',
  styleUrls: ['./weather-info-card.component.css']
})
export class WeatherInfoCardComponent implements OnInit {

  @Input() seasonInfoChild = ''

  msg = ''

  seasonImgPath = ''


  validateSeason = () => { // <- @Alex: can we use a callback here?
    console.log('validate season works!')
    console.log(`Season info child is: ${this.seasonInfoChild}`)
    if(this.seasonInfoChild === 'spring' || this.seasonInfoChild === 'summer' || this.seasonInfoChild === 'fall' || this.seasonInfoChild === 'winter'){
      console.log('real season entered')
      // this.isSeasonEntered = !this.isSeasonEntered
      this.msg = `Cool! It's finally ${this.seasonInfoChild}.`
      this.seasonImgPath = `/assets/${this.seasonInfoChild}.jpg`
    }
    else {
      // this.isSeasonUnknown = !this.isSeasonUnknown
      this.msg = "Sorry, we don't know this season."
      this.seasonImgPath = ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.validateSeason()
    console.log('on changes works!')
  }

}
