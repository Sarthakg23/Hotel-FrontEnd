import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  hotels:Array<any>=[];
  constructor(private hotelService:HotelService,private route:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user'))
    this.route.navigate(['/signIn'])
    this.hotelService.getHotels().subscribe((hotels:any)=>
      {
        for(let hotel of hotels)
        this.hotels.push(hotel);
      })
  }

  allHotels()
  {
    this.hotelService.getHotels().subscribe((hotels:any)=>
    {
      this.hotels=[];
      for(let hotel of hotels)
      this.hotels.push(hotel);
      console.log(this.hotels);
    }) 
  }

  availableHotels()
  {
    this.hotelService.getAvailableHotels().subscribe((hotels:any)=>
      {
        this.hotels=[];
        for(let hotel of hotels)
        this.hotels.push(hotel);
        console.log(this.hotels);
      })
  }

}
