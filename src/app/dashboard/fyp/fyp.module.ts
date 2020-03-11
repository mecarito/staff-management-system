import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedtitlesModule } from './acceptedtitles/acceptedtitles.module';
import { PastyearprojectsModule } from './pastyearprojects/pastyearprojects.module';
import { PendingtitlesModule } from './pendingtitles/pendingtitles.module';
import { ProposetitlesModule } from './proposetitles/proposetitles.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcceptedtitlesModule,
    PastyearprojectsModule,
    PendingtitlesModule,
    ProposetitlesModule,
  ]
})
export class FypModule { }
