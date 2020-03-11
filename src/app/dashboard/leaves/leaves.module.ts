import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskingleaveModule } from './askingleave/askingleave.module';
import { PendingleavesModule } from './pendingleaves/pendingleaves.module';
import { StaffonleaveModule } from './staffonleave/staffonleave.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AskingleaveModule,
    PendingleavesModule,
    StaffonleaveModule,
  ]
})
export class LeavesModule { }
