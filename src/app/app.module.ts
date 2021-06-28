import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoWhitespaceDirective } from './util/no-whitespace.directive';

import {HttpClientModule} from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HotelComponent } from './hotel/hotel.component'

@NgModule({
  declarations: [
    AppComponent,
    NoWhitespaceDirective,
    SignInComponent,
    SignUpComponent,
    HomepageComponent,
    HotelCardComponent,
    NavBarComponent,
    BookingsComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
