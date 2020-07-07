import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FetchJsonPipe } from './fetch-json.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FlyingHeroesPipe,
    HeroBirthdayComponent,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe,
    FetchJsonPipe  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
