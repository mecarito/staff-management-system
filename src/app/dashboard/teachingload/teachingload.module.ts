import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewcourseModule } from '../professionalcourses/addnewcourse/addnewcourse.module';
import { AssigncourseModule } from './assigncourse/assigncourse.module';
import { PastteachingloadModule } from './pastteachingload/pastteachingload.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddnewcourseModule,
    AssigncourseModule,
    PastteachingloadModule,
  ]
})
export class TeachingloadModule { }
