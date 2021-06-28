import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
id:any;
loggedIn:any=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user'))
    {
    this.id=localStorage.getItem('user');
    this.loggedIn=true;
    }
    else
    this.loggedIn=false;
  }

  bookings()
  {
    const userid =localStorage.getItem('user');
    this.router.navigate(['/bookings/'+userid]);
  }

  logOut()
  {
    this.router.navigate(['/signIn']).then(() => {
      window.location.reload();
    });
    localStorage.clear();
  }





}
