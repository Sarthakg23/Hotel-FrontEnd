import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelComponent } from './hotel/hotel.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path:'signIn',component:SignInComponent},{path:'home/:id',component:HomepageComponent},{path:'bookings/:id',component:BookingsComponent},{path:'hotel/:id',component:HotelComponent},{path:'',component:SignUpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
