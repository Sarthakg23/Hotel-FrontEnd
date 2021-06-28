import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  id:any;
  bookings:any;
  constructor(private route:ActivatedRoute,private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    //   console.log(this.id);
    // });

    if(!localStorage.getItem('user'))
    this.router.navigate(['/signIn'])

    this.hotelService.getBookingsOfUser(localStorage.getItem('user')).subscribe((booking:any) =>
    {
      if(booking.status===200)
      {
        this.bookings=booking.body;
      }
    }

    )
  }

  cancel(id:any)
  {
    this.hotelService.cancelBooking(id).subscribe(data=>
      {
        if(data.status==200)
        {
          window.location.reload();
        }
      })
  }

}
