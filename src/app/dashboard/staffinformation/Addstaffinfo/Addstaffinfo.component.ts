import { Component, OnInit } from '@angular/core';
import { MyprofileService } from './Addstaffinfo.service';
import { Staffbio } from './staffbio';


@Component({
  selector: 'app-myprofile',
  templateUrl: './Addstaffinfo.component.html',
  styleUrls: ['./Addstaffinfo.component.scss']
})
export class AddstaffinfoComponent implements OnInit {

  public bio: Staffbio;
  public count: number;
  public result = [];

  constructor(private myprofileservice: MyprofileService) { }

  ngOnInit(): void {
    // this.getallstaff();
  }


  // getallstaff() {
  //   this.myprofileservice.getstaffbio()
  //      .subscribe((data: Staffbio) => {
  //            this.bio = data;
  //            this.count = this.bio[1];
  //            this.result = this.bio[0];
  //      });
  // }

   addstaff(firstName, middleName, lastName, mobileNumber, telephoneNumber,
            staffId, email, website, position, highestEducation, researchGroup,
            officeNo, administrativeRole) {

              const hodfil = {
                firstName,
                middleName,
                lastName,
                mobileNumber,
                telephoneNumber,
                staffId,
                email,
                website,
                position,
                highestEducation,
                researchGroup,
                officeNo,
                administrativeRole
            };

              return this.myprofileservice.addstaff(hodfil).
             subscribe(data => alert( data.response) );
   }

}
