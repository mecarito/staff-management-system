import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  firstname = 'Baraka';
  middlename = 'x';
  lastname = 'maiseli';
  mobileNo = '0714895623' ;
  telephoneNo = '+2552289285566';
  staffId = '10258';
  email = 'barakamaiseli@yahoo.com';
  Website = 'b.co.tz';
  position = 'Senior lecturer';
  highesteducation = 'doctors degree';
  researchgroup = 'Signal processing';
  officeno = 'D25';
  administrativerole = 'Undergraduate coordinator';

  constructor() { }

  ngOnInit(): void {
  }

}
