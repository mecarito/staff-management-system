import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DashboardhomeComponent } from './dashboard/dashboardhome/dashboardhome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffloginComponent } from './logins/stafflogin/stafflogin.component';
import { MyprofileComponent } from './dashboard/staffinformation/myprofile/myprofile.component';
import { AllprofilesComponent } from './dashboard/staffinformation/allprofiles/allprofiles.component';
import { UploadreportComponent } from './dashboard/reports/uploadreport/uploadreport.component';
import { MonthlyreportsComponent } from './dashboard/reports/monthlyreports/monthlyreports.component';
import { QuarterlyreportsComponent } from './dashboard/reports/quarterlyreports/quarterlyreports.component';
import { AddnewcourseComponent } from './dashboard/professionalcourses/addnewcourse/addnewcourse.component';
import { AssigncourseComponent } from './dashboard/teachingload/assigncourse/assigncourse.component';
import { PastteachingloadComponent } from './dashboard/teachingload/pastteachingload/pastteachingload.component';
import { AddcourseComponent } from './dashboard/teachingload/addcourse/addcourse.component';
import { OrganizemeetingsComponent } from './dashboard/meetings/organizemeetings/organizemeetings.component';
import { PendingmeetingsComponent } from './dashboard/meetings/pendingmeetings/pendingmeetings.component';
import { PastmeetingsComponent } from './dashboard/meetings/pastmeetings/pastmeetings.component';
import { SentlettersComponent } from './dashboard/letters/sentletters/sentletters.component';
import { ReceivedlettersComponent } from './dashboard/letters/receivedletters/receivedletters.component';
import { AskingleaveComponent } from './dashboard/leaves/askingleave/askingleave.component';
import { PendingleavesComponent } from './dashboard/leaves/pendingleaves/pendingleaves.component';
import { StaffonleaveComponent } from './dashboard/leaves/staffonleave/staffonleave.component';
import { ListofcoursesComponent } from './dashboard/professionalcourses/listofcourses/listofcourses.component';
import { CoursehistoryComponent } from './dashboard/professionalcourses/coursehistory/coursehistory.component';
import { ElectroniclabComponent } from './dashboard/inventory/electroniclab/electroniclab.component';
import { ComputerlabComponent } from './dashboard/inventory/computerlab/computerlab.component';
import { OfficesComponent } from './dashboard/inventory/offices/offices.component';
import { ProposetitlesComponent } from './dashboard/fyp/proposetitles/proposetitles.component';
import { PendingtitlesComponent } from './dashboard/fyp/pendingtitles/pendingtitles.component';
import { AcceptedtitlesComponent } from './dashboard/fyp/acceptedtitles/acceptedtitles.component';
import { PastyearprojectsComponent } from './dashboard/fyp/pastyearprojects/pastyearprojects.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { GuestloginComponent } from './logins/guestlogin/guestlogin.component';
import { StudentloginComponent } from './logins/studentlogin/studentlogin.component';
import { GuestsignupComponent } from './logins/guestsignup/guestsignup.component';


const routes: Routes = [
  {path: 'logins/guestlogin', component: GuestloginComponent },
  {path: 'logins/stafflogin', component: StaffloginComponent },
  {path: 'logins/studentlogin', component: StudentloginComponent},
  {path: 'logins/guestsignup', component: GuestsignupComponent},

  {path: '', component: HomeComponent },

  {path: 'dashboard', component: DashboardComponent,
  children: [
  {path: 'staffinformation/myprofile', component: MyprofileComponent},
  {path: 'staffinformation/allprofiles', component: AllprofilesComponent},
  {path: 'dashhome', component: DashboardhomeComponent},
  {path: 'reports/uploadreport', component: UploadreportComponent},
  {path: 'reports/monthlyreport', component: MonthlyreportsComponent},
  {path: 'reports/Quarterlyreports', component: QuarterlyreportsComponent},
  {path: 'teachingload/addcourse', component: AddcourseComponent},
  {path: 'teachingload/assingcourse', component: AssigncourseComponent},
  {path: 'teachingload/pasteachingload', component: PastteachingloadComponent},
  {path: 'meetings/organizemeeting', component: OrganizemeetingsComponent},
  {path: 'meetings/pendingmeetings', component: PendingmeetingsComponent},
  {path: 'meetings/pastmeetings', component: PastmeetingsComponent},
  {path: 'letters/sentletters', component: SentlettersComponent},
  {path: 'letters/receivedletters', component: ReceivedlettersComponent},
  {path: 'leaves/askforleave', component: AskingleaveComponent},
  {path: 'leaves/pendingleaves', component: PendingleavesComponent},
  {path: 'leaves/staffonleave', component: StaffonleaveComponent},
  {path: 'pdp/addnewcourse', component: AddnewcourseComponent},
  {path: 'pdp/listofcourses', component: ListofcoursesComponent},
  {path: 'pdp/coursehistory', component: CoursehistoryComponent},
  {path: 'inventory/electroniclab', component: ElectroniclabComponent},
  {path: 'inventory/computerlab', component: ComputerlabComponent},
  {path: 'inventory/offices', component: OfficesComponent},
  {path: 'fyp/proposetitle', component: ProposetitlesComponent},
  {path: 'fyp/pendingtitles', component: PendingtitlesComponent},
  {path: 'fyp/acceptedtitles', component: AcceptedtitlesComponent},
  {path: 'fyp/pastyearprojects', component: PastyearprojectsComponent},
  {path: 'settings', component: SettingsComponent}
]},
  // { path: 'home',        component: HeroListComponent },
  // {path: 'home', component: HomeComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },


{path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
