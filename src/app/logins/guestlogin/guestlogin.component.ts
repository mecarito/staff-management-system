import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.scss']
})
export class GuestloginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.route.navigate(['/dashboard']);
  }
}
