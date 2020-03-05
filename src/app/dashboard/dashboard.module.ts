import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TeachingloadModule } from './teachingload/teachingload.module';
import { StaffinformationModule } from './staffinformation/staffinformation.module';
import { SettingsModule } from './settings/settings.module';
import { ReportsModule } from './reports/reports.module';
import { ProfessionalcoursesModule } from './professionalcourses/professionalcourses.module';
import { MeetingsModule } from './meetings/meetings.module';
import { LettersModule } from './letters/letters.module';
import { LeavesModule } from './leaves/leaves.module';
import { InventoryModule } from './inventory/inventory.module';
import { FypModule } from './fyp/fyp.module';
import { DashboardhomeModule } from './dashboardhome/dashboardhome.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardhomeModule,
    FypModule,
    InventoryModule,
    LeavesModule,
    LettersModule,
    MeetingsModule,
    ProfessionalcoursesModule,
    ReportsModule,
    SettingsModule,
    StaffinformationModule,
    TeachingloadModule,
  ]
})
export class DashboardModule { }
