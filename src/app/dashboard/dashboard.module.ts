import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TeachingloadModule } from './teachingload/teachingload.module';
import { StaffinformationModule } from './staffinformation/staffinformation.module';
import { SettingsModule } from './settings/settings.module';
import { ReportsModule } from './reports/reports.module';
import { MeetingsModule } from './meetings/meetings.module';
import { LettersModule } from './letters/letters.module';
import { LeavesModule } from './leaves/leaves.module';
import { InventoryModule } from './inventory/inventory.module';
import { FypModule } from './fyp/fyp.module';
import { DashboardhomeModule } from './dashboardhome/dashboardhome.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfessionalcouresesModule } from './professionalcourses/professionalcoureses.module';


import { NbThemeModule, NbLayoutModule,  NbSidebarModule, NbButtonModule,
  NbAccordionModule,  NbCardModule, NbIconModule, NbMenuModule, NbActionsModule,
   NbSearchModule, NbSelectModule, NbUserModule, NbCheckboxModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbSidebarModule,
    NbThemeModule,
    NbUserModule,
    NbMenuModule,
    NbLayoutModule,
    NbAccordionModule,
    NbCardModule,
    NbActionsModule,
    NbSearchModule,
    NbButtonModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule,
    NbEvaIconsModule,

    DashboardhomeModule,
    FypModule,
    InventoryModule,
    LeavesModule,
    LettersModule,
    MeetingsModule,
    ProfessionalcouresesModule,
    ReportsModule,
    SettingsModule,
    StaffinformationModule,
    TeachingloadModule,
  ],
})
export class DashboardModule { }
