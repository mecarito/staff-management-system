
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentloginModule } from './studentlogin/studentlogin.module';
import { StaffloginModule } from './stafflogin/stafflogin.module';
import { GuestloginModule } from './guestlogin/guestlogin.module';
import { GuestsignupModule } from './guestsignup/guestsignup.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentloginModule,
    StaffloginModule,
    GuestloginModule,
    GuestsignupModule,

  ]
})
export class LoginsignupModule { }
