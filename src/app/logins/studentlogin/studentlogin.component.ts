import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.route.navigate(['/dashboard']);
  }

}
