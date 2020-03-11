import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivedlettersModule } from './receivedletters/receivedletters.module';
import { SentlettersModule } from './sentletters/sentletters.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReceivedlettersModule,
    SentlettersModule,
  ]
})
export class LettersModule { }
