import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hotels:any;
  constructor(private hotelService:HotelService,private route: Router)
  {

  }
  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(hotels=>
      {
        localStorage.clear();
        console.log(hotels);
        this.hotels=hotels;
      })
  }
  onSubmit(form:any)
  {
    const user={"EMAIL":form.email,"UPASSWORD":form.password};
    this.hotelService.signIn(user).subscribe((user:any)=>
      {
        if(user.status===200)
        {
          const userid=user.body.USERID;
          console.log(userid);
          localStorage.setItem('user', userid);
          this.route.navigate(['/home/'+userid]).then(() => {
            window.location.reload();
          });
        }
      });
  }

}
