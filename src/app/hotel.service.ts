import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) {
   
   }

  getHotels()
  {
    return this.http.get('https://localhost:44363/api/hotel');
  }

  getAvailableHotels()
  {
    return this.http.get('https://localhost:44363/api/hotel/available');
  }

  signIn(user:any)
  {
    return this.http.post('https://localhost:44363/api/user/signIn',user,{observe:'response'});
  }

  signUp(user:any)
  {
    return this.http.post('https://localhost:44363/api/user/signUp',user,{observe:'response'});
  }

  getBookingsOfUser(id:any)
  {
    return this.http.get('https://localhost:44363/api/booking/bookings/'+id,{observe:'response'});
  }

  getHotelById(id:any)
  {
    return this.http.get('https://localhost:44363/api/hotel/'+id);
  }

  book(booking:any)
  {
    return this.http.post('https://localhost:44363/api/booking',booking,{observe:'response'});
  }

  cancelBooking(id:any)
  {
    return this.http.delete('https://localhost:44363/api/booking/'+id,{observe:'response'});
  }
}
