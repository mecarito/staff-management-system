import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(link: string) {

    switch (link) {
      case 'staff': {
        this.route.navigate(['/logins/stafflogin']);
        break;
      }
      case 'student': {
        this.route.navigate(['/logins/studentlogin']);
        break;
      }
      case 'guestsignup': {
        this.route.navigate(['/logins/guestsignup']);
        break;
      }
    }

  }

}
