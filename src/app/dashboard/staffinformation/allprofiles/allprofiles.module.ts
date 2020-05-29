import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprofilesComponent } from './allprofiles.component';
import { AgGridModule} from 'ag-grid-angular';




@NgModule({
  declarations: [AllprofilesComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),

  ]
})
export class AllprofilesModule { }
