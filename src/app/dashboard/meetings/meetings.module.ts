import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizemeetingsModule } from './organizemeetings/organizemeetings.module';
import { PastmeetingsModule } from './pastmeetings/pastmeetings.module';
import { PendingleavesModule } from '../leaves/pendingleaves/pendingleaves.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizemeetingsModule,
    PastmeetingsModule,
    PendingleavesModule,
  ]
})
export class MeetingsModule { }
