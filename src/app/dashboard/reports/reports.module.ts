import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyreportsModule } from './monthlyreports/monthlyreports.module';
import { QuarterlyreportsModule } from './quarterlyreports/quarterlyreports.module';
import { UploadreportModule } from './uploadreport/uploadreport.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MonthlyreportsModule,
    QuarterlyreportsModule,
    UploadreportModule,
  ]
})
export class ReportsModule { }
