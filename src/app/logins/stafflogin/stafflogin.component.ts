import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.scss']
})
export class StaffloginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.route.navigate(['/dashboard']);
  }
}
