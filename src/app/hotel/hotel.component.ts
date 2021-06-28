import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  id:any;
  hotel:any;
  amount:any;
  rprice:any;
  constructor(private route:ActivatedRoute,private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      this.id=data.get('id');
      this.hotelService.getHotelById(this.id).subscribe(data=>{
        this.hotel=data;
        console.log(this.hotel);
        this.rprice=this.hotel.ROOMPRICE;
        console.log(this.rprice);
      })

    }
      )
  }

  onSubmit(form:any)
  {
    
    if(form.status=='VALID')
    {
    console.log(form.value);
    const booking={"BOOKINGSTATUS":"BOOKED","USERID":localStorage.getItem('user'),"HOTELID":this.id,"BOOKINGDATE":new Date(),"ROOMS":form.value.rooms,"BOOKEDFROM":form.value.sdate,"BOOKEDTILL":form.value.edate,"AMOUNT":this.amount};
    this.hotelService.book(booking).subscribe(data=>
      {
        if(data.status===200)
        this.router.navigate(['/bookings/'+localStorage.getItem('user')])
      })
    }
    else
    alert("Enter All Fields");
  }

  onChange(count:any)
  {
    this.amount=this.rprice*count;
    console.log()
    
  }

}
