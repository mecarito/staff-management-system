import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewcourseModule } from './addnewcourse/addnewcourse.module';
import { CoursehistoryModule } from './coursehistory/coursehistory.module';
import { ListofcoursesModule } from './listofcourses/listofcourses.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddnewcourseModule,
    CoursehistoryModule,
    ListofcoursesModule,
  ]
})
export class ProfessionalcouresesModule { }
