import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestsignup',
  templateUrl: './guestsignup.component.html',
  styleUrls: ['./guestsignup.component.scss']
})
export class GuestsignupComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(link: string) {
    switch (link) {
      case 'signup': {
    this.route.navigate(['/dashboard']);
    break;
     }
     case 'login': {
    this.route.navigate(['logins/guestlogin']);
    break;
   }
        }
  }

}
