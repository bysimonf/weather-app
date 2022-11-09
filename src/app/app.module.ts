import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherInfoCardComponent } from './weather-info-card/weather-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherInfoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
