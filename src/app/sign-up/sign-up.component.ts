import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hotels:any;
  constructor(private hotelService:HotelService,private route:Router)
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
  title = 'Hotel-FrontEnd';
  fname="Sarthak";
  lname="Goyal";
  onSubmit(form:any)
  {
    const user={"FIRSTNAME":form.value.fname,"LASTNAME":form.value.lname,"EMAIL":form.value.email,"UPASSWORD":form.value.password,"DOB":form.value.dob};
    if(form.status=='VALID')
    {
    this.hotelService.signUp(user).subscribe((user:any)=>
      {
        if(user.status===200)
        {
          console.log(user);
          const userid=user.body.USERID;
          localStorage.setItem('userId', userid);
          this.route.navigate(['/home/'+userid]).then(() => {
            window.location.reload();
          });
        }
      });
    }
    else
    alert("Enter All Fields!");
  }
}
